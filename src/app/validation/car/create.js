const Joi = require('joi');

const UtilError = require('../../utilError');

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            modelo: Joi.string().min(1).required(),
            cor: Joi.string().min(1).required(),
            ano: Joi.number().min(1950).max(2022).required(),
            acessorios: Joi.array().min(1).required(), //melhorar isso
            quantidadePassageiros: Joi.number().min(1).required(),
        });

        const { error } = await schema.validate(req.body);

        if (error) {
            throw UtilError.badRequest400(res, error.details);
        }

        return next();
    } catch (error) {
        return UtilError.badRequest400(res, error);
    }
}