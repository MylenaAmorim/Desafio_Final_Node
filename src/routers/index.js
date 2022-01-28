const { Router } = require('express');
const carrosRouter = require('../routers/carrosRouter');


module.exports = server => {
  server.use((req, res, next) => {
    carrosRouter(server, new Router());
    next();
  });
};