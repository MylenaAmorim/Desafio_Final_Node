const RentalController = require('../app/controllers/rentalController');

// const createValidation = require('../app/validation/car/create.js');
// const getAllValidation = require('../app/validation/car/getAll.js');
// const validationId = require('../app/validation/general/validationId.js');
// const updateValidation = require('../app/validation/car/update.js');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', RentalController.create);
  routes.get('/', RentalController.getAll);
  routes.get('/:id', RentalController.getOne);
  // routes.put('/:id', validationId, updateValidation, CarController.update);
  routes.delete('/:id', RentalController.delete);
  server.use(prefix, routes);
}