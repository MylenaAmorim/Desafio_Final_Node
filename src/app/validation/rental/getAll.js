const JoiRequire = require('joi');
const dateJoi = require ('@joi/date');
const Joi = JoiRequire.extend(dateJoi);

const Util = require('../../util/util');
const UtilError = require('../../util/utilError');

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            nome: Joi.string().empty(" "),
            cnpj: Joi.string().empty(" ").custom((value, helper) => { if (!Util.isValidCnpj(value)) return helper.message("Invalid CNPJ")}),
            atividades: Joi.string().empty(" "),
            endereco: Joi.array().items(Joi.object({
                'cep': Joi.string(), 
                'complemento': Joi.string(), 
                'number': Joi.string(),
                'isFilial': Joi.boolean(),
            })).empty(),
        });

        const { error } = await schema.validate(req.query, { abortEarly: false });

        if (error) {
            throw UtilError.badRequest(res, error.details);
        }

        return next();
    } catch (error) {
        return UtilError.badRequest(res, error.details);
    }
}