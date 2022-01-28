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

  async findOne(payload) {

    const result = await CarroRepository.findOne(payload);

    return result;
  }

  async delete(payload) {
    const result = await CarroRepository.delete(payload);

    return result;
  }

  async update(id, payload) {

    const result = await CarroRepository.update(id, payload);

    return result;
  }


}


module.exports = new CarroService();