const Joi = require('joi');

const UtilError = require('../../util/utilError');

module.exports = async (req, res, next) => {
    try {      
        const schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }),
            senha: Joi.string().min(6).required()
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