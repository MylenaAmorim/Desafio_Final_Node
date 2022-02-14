const Joi = require('joi');

const UtilError = require('../../util/utilError');

module.exports = async (req, res, next) => {
    try {      
        const schema = Joi.object({
            id: Joi.string().pattern(new RegExp('^[0-9a-fA-F]{24}$')).message("Invalid id")
        });

        const { error } = await schema.validate(req.params, { abortEarly: false });

        if (error) {
            throw UtilError.badRequest(res, error.details);
        }

        return next();
    } catch (error) {
        return UtilError.badRequest(res, error);
    }
}