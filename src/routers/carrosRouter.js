const CarroController = require('../app/controllers/CarroController');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', CarroController.create);
  routes.get('/', CarroController.getAll);
  routes.get('/:id', CarroController.getOne);
  routes.delete('/:id', CarroController.delete);
  server.use(prefix, routes);
}