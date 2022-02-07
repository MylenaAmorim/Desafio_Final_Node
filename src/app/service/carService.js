const CarRepository = require('../repository/carRepository');

class CarService {

  async create(payload) {
    const result = await CarRepository.create(payload);

    return result;
  }

  async findAll(payload) {
    const result = await CarRepository.findAll(payload);

    return result;
  }

  async findOne(payload) {
    const result = await CarRepository.findOne(payload);

    return result;
  }

  async delete(payload) {
    const result = await CarRepository.delete(payload);

    return result;
  }

  async update(id, payload) {
    const result = await CarRepository.update(id, payload);

    return result;
  }

}


module.exports = new CarService();