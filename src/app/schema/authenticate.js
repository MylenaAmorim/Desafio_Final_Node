const { string } = require('joi');
const mongoose = require('mongoose');
const util = require('../util/util');

const authenticateSchema = mongoose.Schema({
    email: {
        type:string
    },
    senha: {
        type: string
    }
});

const authenticate = mongoose.model('Authenticate', authenticateSchema);

module.exports = authenticate
