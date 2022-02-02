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
    const page = 1;
    const limit = 4;

    const pessoas = await peapleSchema.find(payload)
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();

    const count = await peapleSchema.countDocuments(payload);

    return { pessoas, total: count, limit: limit, offiset: page, offisets: Math.ceil(count / limit) };
  }

  async update(id, payload) {
    await peapleSchema.updateOne({ _id: id }, payload);
    return peapleSchema.findOne({ _id: id });
  }
}


module.exports = new PeapleRepository();