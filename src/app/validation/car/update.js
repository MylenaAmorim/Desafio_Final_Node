const Joi = require('joi');

const UtilError = require('../../util/utilError');

module.exports = async (req, res, next) => {
    try {      
        const schema = Joi.object({
            id: Joi.string().pattern(new RegExp('^[0-9a-fA-F]{24}$')).message("Invalid id"),
            modelo: Joi.string().min(1),
            cor: Joi.string().min(1),
            ano: Joi.number().min(1950).max(2022),
            acessorios: Joi.array().min(1), //melhorar isso
            quantidadePassageiros: Joi.number().min(1),
        });

        const { error } = await schema.validate(req.params, req.query, { abortEarly: false });

        if (error) {
            throw UtilError.badRequest(res, error.details);
        }

        return next();
    } catch (error) {
        return UtilError.badRequest(res, error.message);
    }
}