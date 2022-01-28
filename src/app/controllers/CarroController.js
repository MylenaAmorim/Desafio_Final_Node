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
}

module.exports = new CarroController();