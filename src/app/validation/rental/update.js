const JoiRequire = require('joi');
const dateJoi = require ('@joi/date');
const Joi = JoiRequire.extend(dateJoi);

const Util = require('../../util/util');
const UtilError = require('../../util/utilError');

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            nome: Joi.string().empty(" ").required(),
            cnpj: Joi.string().empty(" ").required().custom((value, helper) => { if (!Util.isValidCnpj(value)) return helper.message("Invalid CNPJ")}),
            atividades: Joi.string().empty(" ").required(),
            endereco: Joi.array().items(Joi.object({
                'cep': Joi.string().required(), 
                'complemento': Joi.string(), 
                'number': Joi.string().required(),
                'isFilial': Joi.boolean().required(),
            })).empty(),
        });

        let { error } = await schema.validate(req.body, { abortEarly: false });

        if (error) {
            throw UtilError.badRequest(res, error.details);
        }

        return next();
    } catch (error) {
        return UtilError.badRequest(res, error.details);
    }
}
