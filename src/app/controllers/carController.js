const CarService = require('../service/carService');
const UtilError = require('../util/utilError');

class CarController {

  async create(req, res) {
    try {
      const dados = await CarService.create(req.body);

      return res.status(201).json(dados);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  async getAll(req, res) {
    try {
      const result = await CarService.findAll(req.query);

      if (result.length < 1) {
        return UtilError.notFound(res, `No car found`);
      }

      return res.status(200).json({'veiculos': result});
    } catch (error) {
      return UtilError.internalServer(res, error);
    }
  }

  async getOne(req, res) {
    try {
      const id = req.params.id;
      const carro = await CarService.findOne({ _id: id });

      if (!carro) {
        return UtilError.notFound(res, `No car found of Id ${id}`);
      }

      return res.status(200).json(carro);
    } catch (error) {
      return UtilError.internalServer(res, error);
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const carro = await CarService.findOne({ _id: id });

      if (!carro) {
        return UtilError.notFound(res, `No car found of Id ${id}`);
      }

      const updatedCarro = await CarService.update(id, req.body);

      res.status(200).json(updatedCarro);
    } catch (error) {
      return UtilError.badRequest(res, error);
    }

  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const carro = await CarService.findOne({ _id: id });

      if (!carro) {
        return UtilError.notFound(res, `No car found of Id ${id}`);
      }

      await CarService.delete({ _id: id });

      return res.status(204).json();
    } catch (error) {
      return UtilError.badRequest(res, error);
    }
  }
}

module.exports = new CarController();