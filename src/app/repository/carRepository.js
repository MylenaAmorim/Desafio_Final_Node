const carSchema = require('../schema/car');

class CarroRepository {

  async create(payload) {
    return carSchema.create(payload);
  }

  async delete(payload) {
    return carSchema.deleteOne(payload);
  }

  async findOne(payload) {
    return carSchema.findOne(payload);
  }

  async findAll(payload) {
    return carSchema.find(payload);
  }

  async update(id, payload) {
    await carSchema.updateOne({ _id: id }, payload);
    return carSchema.findOne({ _id: id });
  }
}


module.exports = new CarroRepository();