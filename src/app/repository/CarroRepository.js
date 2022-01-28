const carSchema = require('../schema/car');

class CarroRepository {

  async create(payload) {
    return carSchema.create(payload);
  }

  async findAll() {
    return carSchema.find();
  }
}


module.exports = new CarroRepository();