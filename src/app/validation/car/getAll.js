const Joi = require('joi');
const UtilError = require('../../util/utilError');

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            modelo: Joi.string().empty(" "),
            cor: Joi.string().empty(" "),
            ano: Joi.number().min(1950).max(2022),
            acessorios: Joi.array().items({'descricao': Joi.string()}).unique('descricao').empty(" "),
            quantidadePassageiros: Joi.number(),
        });

        const { error } = await schema.validate(req.query);

        if (error) {
            throw UtilError.badRequest(res, error.details);
        }

        return next();
    } catch (error) {
        return UtilError.badRequest(res, error.details);
    }
}