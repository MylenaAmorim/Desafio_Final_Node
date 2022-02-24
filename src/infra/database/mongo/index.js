const mongoose = require('mongoose');
require('dotenv').config();

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    const db = process.env.DATABASE

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
        console.log(error)
      });
  }
}

module.exports = new Database().connect();