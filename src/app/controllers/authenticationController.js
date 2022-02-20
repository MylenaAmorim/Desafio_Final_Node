const PeapleService = require('../service/peapleService');
const UtilError = require('../util/utilError');

const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

class AuthenticationController {
    async autenticacao(req, res) {
        try {
            const { email, senha } = req.body;

            const user = await PeapleService.findOne({ email: email });

            if (!user) {
                return UtilError.notFound(res, `No user found`);
            }

            if (senha != user.senha) {
                return UtilError.notFound(res, `Invalid password`);
            }

            const token = jwt.sign({ _id: user._id }, SECRET, {
                expiresIn: 86400,
            });

            res.cookie('authorization', token);
            
            return res.status(200).json({ user, token });
        } catch (error) {
            return UtilError.internalServer(res, error.message);
        }
    }

}

module.exports = new AuthenticationController();