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
    const page = 1;
    const limit = 4;

    const veiculos = await carSchema.find(payload)
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();

    const count = await carSchema.countDocuments();

    return { veiculos, total: count, limit: limit, offiset: page, offisets: Math.ceil(count / limit) };
  }

  async update(id, payload) {
    await carSchema.updateOne({ _id: id }, payload);
    return carSchema.findOne({ _id: id });
  }
}


module.exports = new CarroRepository();