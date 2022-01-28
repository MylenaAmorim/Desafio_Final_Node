const mongoose = require('mongoose');

const peapleSchema = mongoose.Schema({        
    nome: {
        type: String,
        require: true
    },
    cpf: {
        type: Number,
        require: true
    },
    data_nascimento: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    habilitado: {
        type: Boolean,
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

const peaple = mongoose.model('Peaple', peapleSchema);

module.exports = peaple;
