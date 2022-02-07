const JoiRequire = require('joi');
const dateJoi = require ('@joi/date');
const Joi = JoiRequire.extend(dateJoi);

const Util = require('../../util/util');
const UtilError = require('../../util/utilError');

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            nome: Joi.string().empty(" "),
            cpf: Joi.string().empty(" ").custom((value, helper) => { if (!Util.isValidCPF(value)) return helper.message("Invalid CPF")}),
            data_nascimento: Joi.date().format('DD/MM/YYYY'),
            email: Joi.string().empty(" ").email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }),
            senha: Joi.string().min(6),
            habilitado: Joi.string().valid('sim', 'não').min(3).max(3),
        });

        if (req.query.cpf && !Util.isValidCPF(req.query.cpf)) {
            throw UtilError.badRequest(res, "Invalid CPF");
        }

        const { error } = await schema.validate(req.query);

        if (error) {
            throw UtilError.badRequest(res, error.details);
        }

        return next();
    } catch (error) {
        return UtilError.badRequest(res, error);
    }
}