const CarroRepository = require('../../app/repository/CarroRepository');

class CarroService {

  async create(payload) {

    const result = await CarroRepository.create(payload);

    return result;
  }

  async findAll(payload) {

    const result = await CarroRepository.findAll();

    return result;
  }


}


module.exports = new CarroService();