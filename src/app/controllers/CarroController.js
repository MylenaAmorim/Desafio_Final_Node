const CarroService = require('../service/CarroService');

class CarroController {

  async create(req, res) {
    try {
      const dados = await CarroService.create(req.body);

      return res.status(201).json(dados);
    } catch (error) {
      return res.status(400).json({
        'message': 'Bad Request',
        'details': [{ 'message': error.message }]
      });
    }
  }

  async getAll(req, res) {
    try {
      const result = await CarroService.findAll(req.body);

      return res.status(200).json({ 'cars': result });
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const carro = await CarroService.findOne({ _id: id });

      if (!carro) {
        return res.status(404).json({ message: 'Car not found' });
      }

      await CarroService.delete({ _id: id });

      return res.status(204).json();
    } catch (error) {
      return res.status(400).json({
        'message': 'Bad request',
        'details': [{ 'message': error }]
      });
    }
  }
}

module.exports = new CarroController();