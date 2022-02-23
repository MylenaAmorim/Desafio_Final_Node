const mongoose = require('mongoose');
require('dotenv-safe').config();

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    const db = process.env.DATABASE || 'mongodb://127.0.0.1:27017/compassolisa';

    return mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true
    })
      .then(() => {
        console.log("Conectado com o banco ", db)
      })
      .catch((error) => {
        console.log("Algo deu errado")
        console.error(error)
      });
  }
}

module.exports = new Database().connect();