const PeapleService = require('../service/peapleService');
const UtilError = require('../util/utilError');
const Ut = require('../util/util');

const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

class PeapleController {

  async create(req, res) {
    try {
      const dados = await PeapleService.create(req.body);
      return res.status(201).json(dados);
    } catch (error) {
      return UtilError.badRequest(res, error.message);
    }
  }

  async getAll(req, res) {
    try {
      const result = await PeapleService.findAll(req.query);

      if (!result.pessoas.length) {
        return UtilError.notFound(res, `No peaple found`);
      }

      return res.status(200).json(result);
    } catch (error) {
      return UtilError.internalServer(res, error.message);
    }
  }

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
        expiresIn: 86400
      });

      res.json({ user, token});
    } catch (error) {
      return UtilError.internalServer(res, error);
    }
  }

  async getOne(req, res) {
    try {
      const id = req.params.id;
      const peaple = await PeapleService.findOne({ _id: id });

      if (!peaple) {
        return UtilError.notFound(res, `No peaple found`);
      }

      return res.status(200).json(peaple);
    } catch (error) {
      return UtilError.internalServer(res, error);
    }
  }

  async update(req, res) {
    const id = req.params.id;

    try {
      const updatedPeaple = await PeapleService.update(id, req.body);

      res.status(200).json(updatedPeaple);
    } catch (error) {
      return UtilError.badRequest(res, error);
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const peaple = await PeapleService.findOne({ _id: id });

      if (!peaple) {
        return UtilError.notFound(res, `No peaple found`);
      }

      await PeapleService.delete({ _id: id });

      return res.status(204).json();
    } catch (error) {
      return UtilError.badRequest(res, error.message);
    }
  }
}

module.exports = new PeapleController();