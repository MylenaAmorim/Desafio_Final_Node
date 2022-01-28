const PeapleService = require('../service/PeapleService');

class PeapleController {

  async create(req, res) {
    try {
      const dados = await PeapleService.create(req.body);

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
      const result = await PeapleService.findAll(req.body);

      return res.status(200).json({ 'peaples': result });
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async getOne(req, res) {
    try {
      const id = req.params.id;
      const carro = await PeapleService.findOne({ _id: id });

      if (!carro) {
        return res.status(404).json({ message: 'Peaple not found' });
      }

      return res.status(200).json(carro);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async update(req, res) {
    const id = req.params.id;
    
    try {
      const updatedCarro = await PeapleService.update(id, req.body);

      res.status(200).json(updatedCarro);
    } catch (error) {

      return res.status(400).json({
        'message': 'bad request',
        'details': [{ 'message': error.message, }]
      })

    }

  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const carro = await PeapleService.findOne({ _id: id });

      if (!carro) {
        return res.status(404).json({ message: 'Peaple not found' });
      }

      await PeapleService.delete({ _id: id });

      return res.status(204).json();
    } catch (error) {
      return res.status(400).json({
        'message': 'Bad request',
        'details': [{ 'message': error }]
      });
    }
  }
}

module.exports = new PeapleController();