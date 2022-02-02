const Joi = require('joi');

const UtilError = require('../../util/utilError');

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            modelo: Joi.string().min(1).required(),
            cor: Joi.string().min(1).required(),
            ano: Joi.number().min(1950).max(2022).required(),
            acessorios: Joi.array().items({'descricao': Joi.string().required()}).unique('descricao').min(1).required(),
            quantidadePassageiros: Joi.number().min(1).required(),
        });

        const { error } = await schema.validate(req.body, { abortEarly: false });

        if (error) {
            throw UtilError.badRequest(res, error.details);
        }

        return next();
    } catch (error) {
        return UtilError.badRequest(res, error);
    }
}