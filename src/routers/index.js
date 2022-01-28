const { Router } = require('express');
const carrosRouter = require('../routers/carrosRouter');
const pessoasRouter = require('../routers/pessoasRouter');

module.exports = server => {
  server.use((req, res, next) => {
    carrosRouter(server, new Router());
    pessoasRouter(server, new Router());
    next();
  });
};