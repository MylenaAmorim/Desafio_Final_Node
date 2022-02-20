const UtilError = require('../util/utilError');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.cookies.authorization;

    if (!authHeader) {
      throw UtilError.error("Bad Request", "Token not informed in header");
    }

    jwt.verify(authHeader, SECRET, (err, decoded) => {
      if (err) {
        throw UtilError.error("Invalid", "Token invalid");
      }

      return next();
    });

  } catch(error) {
    return res.status(400).send(error);
  }
}