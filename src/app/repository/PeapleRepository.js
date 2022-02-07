const peapleSchema = require('../schema/peaple');

class PeapleRepository {

  async create(payload) {
    return peapleSchema.create(payload);
  }

  async delete(payload) {
    return peapleSchema.deleteOne(payload);
  }

  async findOne(payload) {
    return peapleSchema.findOne(payload);
  }

  async findAll(payload) {
    return peapleSchema.find(payload)
  }

  async update(id, payload) {
    await peapleSchema.updateOne({ _id: id }, payload);
    return peapleSchema.findOne({ _id: id });
  }
}


module.exports = new PeapleRepository();