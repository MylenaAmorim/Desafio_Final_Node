const RentalRepository = require('../repository/rentalRepository');
const UtilError = require('../util/utilError');

class RentalService {

  async create(payload) {
    let cnpj = await RentalRepository.findOne({ cnpj: payload.cnpj });

    if (cnpj) {
      throw UtilError.error("Conflict", `CNPJ ${payload.cnpj} already in use`);
    }

    const result = await RentalRepository.create(payload);

    return result;
  }

  async findAll(payload) {
    const result = await RentalRepository.findAll(payload);

    return result;
  }

  async findOne(payload) {
    const result = await RentalRepository.findOne(payload);

    return result;
  }

  async delete(payload) {
    const result = await RentalRepository.delete(payload);

    return result;
  }

  async update(id, payload) {
    let cnpj = await RentalRepository.findOne({ cnpj: payload.cnpj });

    if (cnpj && (cnpj.id != id)) {
      throw UtilError.error("Conflict", `CNPJ ${payload.cnpj} already in use`);
    }

    const result = await RentalRepository.update(id, payload);

    return result;
  }

}


module.exports = new RentalService();