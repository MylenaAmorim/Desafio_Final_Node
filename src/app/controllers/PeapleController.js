const PeapleService = require('./../service/PeapleService');
const UtilError = require('../util/utilError');

class PeapleController {

  async create(req, res) {
    try {
      const dados = await PeapleService.create(req.body);

      return res.status(201).json(dados);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async getAll(req, res) {
    try {
      const result = await PeapleService.findAll(req.query);

      if (result.length < 1) {
        return UtilError.notFound(res, `No peaple found`);
      }

      return res.status(200).json({'pessoas': result});
    } catch (error) {
      return UtilError.internalServer(res, error.message);
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
      return UtilError.internalServer(res, error.message);
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const peaple = await PeapleService.findOne({ _id: id });

      if (!peaple) {
        return UtilError.notFound(res, `No peaple found`);
      }

      const updatedPeaple = await PeapleService.update(id, req.body);

      res.status(200).json(updatedPeaple);
    } catch (error) {
      return res.status(400).send(error);
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
      return UtilError.internalServer(res, error.message);
    }
  }
}

module.exports = new PeapleController();