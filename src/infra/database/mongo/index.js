const mongoose = require('mongoose');
require('dotenv-safe').config();

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    const db = "mongodb+srv://dev:teste100@cluster0.6arfm.mongodb.net/compassolisa?retryWrites=true&w=majority" || process.env.DATABASE

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