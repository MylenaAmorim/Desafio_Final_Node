const CarController = require('../app/controllers/carController');

const createValidation = require('../app/validation/car/create.js');
const getAllValidation = require('../app/validation/car/getAll.js');
const getOneValidation = require('../app/validation/car/getOne.js');
const deleteValidation = require('../app/validation/car/delete.js');
const updateValidation = require('../app/validation/car/update.js');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', createValidation, CarController.create);
  routes.get('/', getAllValidation, CarController.getAll);
  routes.get('/:id', getOneValidation, CarController.getOne);
  routes.put('/:id', updateValidation, CarController.update);
  routes.delete('/:id', deleteValidation, CarController.delete);
  server.use(prefix, routes);
}