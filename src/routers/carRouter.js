const CarController = require('../app/controllers/carController');

const createValidation = require('../app/validation/car/create.js');
const getAllValidation = require('../app/validation/car/getAll.js');
const validationId = require('../app/validation/general/validationId.js');
const updateValidation = require('../app/validation/car/update.js');

const validationAuth = require('../app/middlewares/auth');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', validationAuth, createValidation, CarController.create);
  routes.get('/', validationAuth, getAllValidation, CarController.getAll);
  routes.get('/:id', validationAuth, validationId, CarController.getOne);
  routes.put('/:id', validationAuth, validationId, updateValidation, CarController.update);
  routes.delete('/:id', validationAuth, validationId, CarController.delete);
  routes.patch('/:idCar/acessorios/:id', CarController.updateAcessorio);

  server.use(prefix, routes);
}