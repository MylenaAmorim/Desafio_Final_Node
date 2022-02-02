require('./infra/database/mongo/index');
require('dotenv-safe').config();

const express = require('express');
const router = require('./routers');
const cors = require('cors');

class App {
  constructor () {
    this.server = express();
    this.routes();
    this.middlewares();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    // this.server.use(env);
  }

  routes() {
    router(this.server);
  }
}

module.exports = new App().server;