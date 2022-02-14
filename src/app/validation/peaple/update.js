const JoiRequire = require('joi');
const dateJoi = require ('@joi/date');
const Joi = JoiRequire.extend(dateJoi);

const Util = require('../../util/util');
const UtilError = require('../../util/utilError');

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            nome: Joi.string().empty(" ").required(),
            cpf: Joi.string().empty(" ").required().custom((value, helper) => { if (!Util.isValidCPF(value)) return helper.message("Invalid CPF")}),
            data_nascimento: Joi.date().format('DD/MM/YYYY').required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }).required(),
            senha: Joi.string().min(6).required(),
            habilitado: Joi.string().valid('sim', 'não').min(3).max(3).required(),
        });

        let { error } = await schema.validate(req.body, { abortEarly: false });

        if (error) {
            throw UtilError.badRequest(res, error.details);
        }

        return next();
    } catch (error) {
        return UtilError.badRequest(res, error);
    }
}
