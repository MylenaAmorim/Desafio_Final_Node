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

  async findOneAndUpdate(payload, update) {
    const result = await CarRepository.findOneAndUpdate(payload, update);

    return result;
  } 
  async where(payload) {
    const result = await CarRepository.where(payload);

    return result;
  } 

}


module.exports = new CarService();