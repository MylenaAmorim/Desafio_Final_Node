const carSchema = require('../schema/car');

class CarroRepository {

  async create(payload) {
    return carSchema.create(payload);
  }

  async delete(payload) {
    return carSchema.deleteOne(payload);
  }

  async findOne(payload) {
    return carSchema.find(payload);
  }

  async findAll(payload) {
    return carSchema.find();
  }

  
}


module.exports = new CarroRepository();