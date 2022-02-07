const Joi = require('joi');

const UtilError = require('../../util/utilError');

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            modelo: Joi.string().empty(" ").required(),
            cor: Joi.string().empty(" ").required(),
            ano: Joi.number().min(1950).max(2022).required(),
            acessorios: Joi.array().items({'descricao': Joi.string().required()}).unique('descricao').empty(" ").required(),
            quantidadePassageiros: Joi.number().required(),
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