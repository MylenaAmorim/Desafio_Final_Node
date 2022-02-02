const JoiRequire = require('joi');
const dateJoi = require ('@joi/date');
const Joi = JoiRequire.extend(dateJoi);

const Util = require('../../util/util');
const UtilError = require('../../util/utilError');

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            id: Joi.string().pattern(new RegExp('^[0-9a-fA-F]{24}$')).message("Invalid id"),
            nome: Joi.string().min(1),
            cpf: Joi.string(),
            data_nascimento: Joi.date().format('DD/MM/YYYY'),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }),
            senha: Joi.string().min(6),
            habilitado: Joi.string().valid('sim', 'não'),
        });

        if (!Util.isValidCPF(req.body.cpf)) {
            throw UtilError.badRequest(res, "Invalid CPF");
        }

        const { error } = await schema.validate(req.params, req.query, { abortEarly: false });

        if (error) {
            throw UtilError.badRequest(res, error.details);
        }

        return next();
    } catch (error) {
        return UtilError.badRequest(res, error.message);
    }
}
