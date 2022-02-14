const RentalRepository = require('../repository/rentalRepository');

class RentalService {

  async create(payload) {
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
    const result = await RentalRepository.update(id, payload);

    return result;
  }

}


module.exports = new RentalService();