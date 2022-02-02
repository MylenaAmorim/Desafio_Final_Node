const { Router } = require('express');
const carRouter = require('../routers/carRouter');
const peapleRouter = require('./peapleRouter');
const authenticateRouter = require('./authenticateRouter');

module.exports = server => {
  server.use((req, res, next) => {
    carRouter(server, new Router());
    peapleRouter(server, new Router());
    authenticateRouter(server, new Router())
    next();
  });

  server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
        )
        next()
    })
};