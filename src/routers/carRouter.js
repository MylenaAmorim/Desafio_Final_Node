const CarController = require('../app/controllers/carController');

const createValidation = require('../app/validation/car/create.js');
const getAllValidation = require('../app/validation/car/getAll.js');
const validationId = require('../app/validation/general/validationId.js');
const updateValidation = require('../app/validation/car/update.js');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/api/v1/car/', createValidation, CarController.create);
  routes.get('/', getAllValidation, CarController.getAll);
  routes.get('/:id', validationId, CarController.getOne);
  routes.put('/:id', validationId, updateValidation, CarController.update);
  routes.delete('/:id', validationId, CarController.delete);

  // Antes de acessar as rotas abaixo, terá que passar pelo teste criado
  // routes.use((req, res, next) => {
  //   const token = req.headers['authorization']
  //   // caso não receba nenhum token, já retorna o erro e não liberando o acesso as rotas.
  //   if (!token) return res.json({ error: true, message: 'Nenhum token recebido.' })

  //   jwt.verify(token, supersecret, (err, data) => {
  //     if (err) return res.json(err) // caso o token recebido seja invalido, já retorna o erro
  //     next() // por final, se o token for válido, usa o next() para liberar o acesso as rotas
  //   })

  // })
  server.use(prefix, routes);
}