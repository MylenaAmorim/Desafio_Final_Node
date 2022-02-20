const mongoose = require('mongoose');
const Util = require('../util/util');

const peapleSchema = mongoose.Schema({        
    nome: {
        type: String,
        require: true
    },
    cpf: {
        type: String,
        unique: true,
        require: true
    },
    data_nascimento: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    senha: {
        type: String,
        min: 6,
        require: true
    },
    habilitado: {
        type: String,
        enum: ['sim', 'não'],
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
        select: false
    }
});

Util.hideInfos(peapleSchema);

const peaple = mongoose.model('Peaple', peapleSchema);

module.exports = peaple;
