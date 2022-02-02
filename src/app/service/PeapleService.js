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
    // const result = {...pessoas, data_nascimento: Util.formatDatePtToEn(pessoas.data_nascimento)}
    // console.log("xx ", pessoas[0].data_nascimento)

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
    const dataNascimento = Util.formatDatePtToEn(payload.data_nascimento);

    if (Util.isDataBirthValid(dataNascimento)) {
      return await PeapleRepository.update(id, {
        "nome": payload.nome,
        "cpf": payload.cpf,
        "data_nascimento": dataNascimento,
        "email": payload.email,
        "senha": payload.senha,
        "habilitado": payload.habilitado
      });
    } else {
      throw 'A pessoa deve ter no minimo 18 anos.'
    }
  }

}

module.exports = new PeapleService();