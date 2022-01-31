const { Router } = require('express');
const carRouter = require('../routers/carRouter');
const peapleRouter = require('./peapleRouter');

module.exports = server => {
  server.use((req, res, next) => {
    carRouter(server, new Router());
    peapleRouter(server, new Router());
    next();
  });
};