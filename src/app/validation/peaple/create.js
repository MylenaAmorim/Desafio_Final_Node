const JoiRequire = require('joi');
const dateJoi = require ('@joi/date');
const Joi = JoiRequire.extend(dateJoi);

const Util = require('../../util/util');
const UtilError = require('../../util/utilError');

const controller = require('../../controllers/peapleController');

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            nome: Joi.string().min(1).required(),
            cpf: Joi.string().required(),
            data_nascimento: Joi.date().format('DD/MM/YYYY').required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }),
            senha: Joi.string().min(6).required(),
            habilitado: Joi.string().valid('sim', 'não').required()
        });

        if (!Util.isValidCPF(req.body.cpf)) {
            throw UtilError.badRequest(res, "Invalid CPF");
        }

        const { error } = await schema.validate(req.body, { abortEarly: false });


        if (error) {
            throw UtilError.badRequest(res, error.details);
        }

        return next();
    } catch (error) {
        return UtilError.badRequest(res, error.message);
    }
}
