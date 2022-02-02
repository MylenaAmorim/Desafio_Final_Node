const peapleController = require('../app/controllers/peapleController');
const loginValidation = require('../app/validation/authenticaticate/login');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/', loginValidation, peapleController.autenticacao);
  server.use(prefix, routes);
}