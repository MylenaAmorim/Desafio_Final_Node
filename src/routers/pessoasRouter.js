const PeapleController = require('../app/controllers/PeapleController');

module.exports = (server, routes, prefix = '/api/v1/peaple') => {
  routes.post('/', PeapleController.create);
  routes.get('/', PeapleController.getAll);
  routes.get('/:id', PeapleController.getOne);
  routes.put('/:id', PeapleController.update);
  routes.delete('/:id', PeapleController.delete);
  server.use(prefix, routes);
}