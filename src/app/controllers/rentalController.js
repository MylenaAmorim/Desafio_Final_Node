const RentalService = require('../service/rentalService');
const UtilError = require('../util/utilError');
const axios = require('axios');

class RentalController {

  async create(req, res) {
    let enderecosBody = req.body.endereco;
    let enderecoCompleto = [];

    for (const endereco of enderecosBody) {
      let response = await axios.get(`https://viacep.com.br/ws/${endereco.cep}/json`);

      if (response.data.erro) {
        throw UtilError.error("Bad Request", `CEP ${endereco.cep} not found`);
      }

      let novoEndereco = { ...endereco, localidade: response.data.localidade, logradouro: response.data.logradouro, bairro: response.data.bairro, uf: response.data.uf };
      
      enderecoCompleto.push(novoEndereco);
    }

    try {
      let dados = { ...req.body, endereco: enderecoCompleto };

      const result = await RentalService.create(dados);

      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async getAll(req, res) {
    try {
      const result = await RentalService.findAll(req.query);

      if (result.length < 1) {
        return UtilError.notFound(res, `No rental found`);
      }

      return res.status(200).json({ 'locadoras': result });
    } catch (error) {
      return UtilError.internalServer(res, error.message);
    }
  }

  async getOne(req, res) {
    try {
      const id = req.params.id;
      const rental = await RentalService.findOne({ _id: id });

      if (!rental) {
        return UtilError.notFound(res, `No rental found`);
      }

      return res.status(200).json(rental);
    } catch (error) {
      return UtilError.internalServer(res, error.message);
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const rental = await RentalService.findOne({ _id: id });

      if (!rental) {
        return UtilError.notFound(res, `No rental found`);
      }

      const updatedRental = await RentalService.update(id, req.body);

      res.status(200).json(updatedRental);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const rental = await RentalService.findOne({ _id: id });

      if (!rental) {
        return UtilError.notFound(res, `No rental found`);
      }

      await RentalService.delete({ _id: id });

      return res.status(204).json();
    } catch (error) {
      return UtilError.internalServer(res, error.message);
    }
  }
}

module.exports = new RentalController();