const CarController = require('../app/controllers/carController');

const createValidation = require('../app/validation/car/create.js');
const getAllValidation = require('../app/validation/car/getAll.js');
const validationId = require('../app/validation/general/validationId.js');
const updateValidation = require('../app/validation/car/update.js');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', createValidation, CarController.create);
  routes.get('/', getAllValidation, CarController.getAll);
  routes.get('/:id', validationId, CarController.getOne);
  routes.put('/:id', validationId, updateValidation, CarController.update);
  routes.delete('/:id', validationId, CarController.delete);
  server.use(prefix, routes);
}