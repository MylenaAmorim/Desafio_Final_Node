const PeapleRepository = require('../repository/PeapleRepository');

class PeapleService {

  async create(payload) {

    const result = await PeapleRepository.create(payload);

    return result;
  }

  async findAll(payload) {

    const result = await PeapleRepository.findAll();

    return result;
  }

  async findOne(payload) {

    const result = await PeapleRepository.findOne(payload);

    return result;
  }

  async delete(payload) {
    const result = await PeapleRepository.delete(payload);

    return result;
  }

  async update(id, payload) {

    const result = await PeapleRepository.update(id, payload);

    return result;
  }


}

module.exports = new PeapleService();