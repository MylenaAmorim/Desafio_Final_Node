const PeapleRepository = require('../repository/peapleRepository');
const { where } = require('../schema/peaple');
const Util = require('../util/util');
const UtilError = require('../util/utilError');

class PeapleService {

  async create(payload) {
    let cpf = await PeapleRepository.findOne({ cpf: payload.cpf });

    if (cpf) {
      throw UtilError.error("Conflict", `CPF ${payload.cpf} already in use`);
    }

    let email = await PeapleRepository.findOne({ email: payload.email });

    if (email) {
      throw UtilError.error("Conflict", `Email ${payload.email} already in use`);
    }

    const dateBirth = Util.formatDatePtToEn(payload.data_nascimento);
    const data = {...payload, data_nascimento: dateBirth};

    if (Util.isDateBirthValid(dateBirth)) {
      return await PeapleRepository.create(data);
    } else {
      throw UtilError.error("Bad Request", `The person must be at least 18 years old.`);
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
    let cpfPeaple = await PeapleRepository.findOne({ cpf: payload.cpf });

    if (cpfPeaple && (cpfPeaple.id != id)) {
      throw UtilError.error("Conflict", `CPF ${payload.cpf} already in use`);
    }
    
    let emailPeaple = await PeapleRepository.findOne({ email: payload.email });

    if (emailPeaple && (emailPeaple.id != id)) {
      throw UtilError.error("Conflict", `Email ${payload.email} already in use`);
    }

    const dateBirth = Util.formatDatePtToEn(payload.data_nascimento);
    const data = {...payload, data_nascimento: dateBirth};

    if (Util.isDateBirthValid(dateBirth)) {
      return await PeapleRepository.update(id, data);
    } else {
      throw UtilError.error("Bad Request", `The person must be at least 18 years old.`);
    }
  }

}

module.exports = new PeapleService();