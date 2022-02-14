const RentalService = require('../service/rentalService');
const UtilError = require('../util/utilError');
const axios = require('axios');
const { Promise } = require('mongoose');



class RentalController {

  async create(req, res) {
    let enderecosBody = req.body.endereco;
    let enderecoCompleto = [];

    for (const endereco of enderecosBody) {
      let response = await axios.get(`https://viacep.com.br/ws/${endereco.cep}/json`);
      let novoEndereco = { ...endereco, localidade: response.data.localidade, logradouro: response.data.logradouro, bairro: response.data.bairro, uf: response.data.uf };
      
      enderecoCompleto.push(novoEndereco);
    }

    try {
      let dados = { ...req.body, endereco: enderecoCompleto };

      const result = await RentalService.create(dados);

      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).send(error.message);
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

      if (!peaple) {
        return UtilError.notFound(res, `No rental found`);
      }

      return res.status(200).json(peaple);
    } catch (error) {
      return UtilError.internalServer(res, error.message);
    }
  }

  // async update(req, res) {
  //   try {
  //     const id = req.params.id;
  //     const peaple = await RentalService.findOne({ _id: id });

  //     if (!peaple) {
  //       return UtilError.notFound(res, `No peaple found`);
  //     }

  //     const updatedPeaple = await RentalService.update(id, req.body);

  //     res.status(200).json(updatedPeaple);
  //   } catch (error) {
  //     return UtilError.badRequest(res, error);
  //   }
  // }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const peaple = await RentalService.findOne({ _id: id });

      if (!peaple) {
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