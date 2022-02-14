const rentalSchema = require('../schema/rental');

class rentalRepository {

  async create(payload) {
    return rentalSchema.create(payload);
  }

  async delete(payload) {
    return rentalSchema.deleteOne(payload);
  }

  async findOne(payload) {
    return rentalSchema.findOne(payload);
  }

  async findAll(payload) {
    return rentalSchema.find(payload);
  }

  async update(id, payload) {
    await rentalSchema.updateOne({ _id: id }, payload);
    return rentalSchema.findOne({ _id: id });
  }
}


module.exports = new rentalRepository();