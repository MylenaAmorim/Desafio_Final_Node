const mongoose = require('mongoose');
require('dotenv').config();

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    const db = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/compassolisa';
    return mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true
    });
  }
}

module.exports = new Database().connect();