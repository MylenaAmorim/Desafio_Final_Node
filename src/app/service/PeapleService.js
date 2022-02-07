const PeapleRepository = require('../repository/peapleRepository');
const Util = require('../util/util');

class PeapleService {

  async create(payload) {
    const dateBirth = Util.formatDatePtToEn(payload.data_nascimento);
    const data = {...payload, data_nascimento: dateBirth};

    if (Util.isDateBirthValid(dateBirth)) {
      return await PeapleRepository.create(data);
    } else {
      throw 'A pessoa deve ter no minimo 18 anos.'
    }
  }

  async findAll(payload) {
    const pessoas = await PeapleRepository.findAll(payload);

    return pessoas;
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
    const dateBirth = Util.formatDatePtToEn(payload.data_nascimento);
    const data = {...payload, data_nascimento: dateBirth};

    if (Util.isDateBirthValid(dateBirth)) {
      return await PeapleRepository.update(id, data);
    } else {
      throw 'A pessoa deve ter no minimo 18 anos.'
    }
  }

}

module.exports = new PeapleService();