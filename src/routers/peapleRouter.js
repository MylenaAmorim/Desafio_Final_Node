const PeapleController = require('../app/controllers/peapleController');

const createValidation = require('../app/validation/peaple/create');
const validationId = require('../app/validation/general/validationId.js');
const getAllValidation = require('../app/validation/peaple/getAll.js');
const updateValidation = require('../app/validation/peaple/update.js');

module.exports = (server, routes, prefix = '/api/v1/peaple') => {
  routes.post('/', createValidation, PeapleController.create);
  routes.get('/', getAllValidation, PeapleController.getAll);
  routes.get('/:id', validationId, PeapleController.getOne);
  routes.put('/:id', updateValidation, PeapleController.update);
  routes.delete('/:id', validationId, PeapleController.delete);
  server.use(prefix, routes);
}