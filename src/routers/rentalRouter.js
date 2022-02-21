const RentalController = require('../app/controllers/rentalController.js');

const createValidation = require('../app/validation/rental/create.js');
const getAllValidation = require('../app/validation/rental/getAll.js');
const validationId = require('../app/validation/general/validationId.js');
const updateValidation = require('../app/validation/rental/update.js');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', createValidation, RentalController.create);
  routes.get('/', getAllValidation, RentalController.getAll);
  routes.get('/:id', validationId, RentalController.getOne);
  routes.put('/:id', validationId, updateValidation, RentalController.update);
  routes.delete('/:id', validationId, RentalController.delete);
  server.use(prefix, routes);
}