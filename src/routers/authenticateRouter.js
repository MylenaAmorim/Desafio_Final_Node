const AuthenticationController = require('../app/controllers/authenticationController');
const loginValidation = require('../app/validation/authenticaticate/login');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/', loginValidation, AuthenticationController.autenticacao);
  server.use(prefix, routes);
}