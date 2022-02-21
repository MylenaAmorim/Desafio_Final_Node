const mongoose = require('mongoose');
const Util = require('../util/util');

const carSchema = mongoose.Schema({
    modelo: {
        type: String,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        min: 1950, 
        max: 2022,
        required: true
    },
    acessorios: [{
        descricao: { type: String }
    }],
    quantidadePassageiros: {
        type: String,
        required: true
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

Util.hideInfos(carSchema);

const cars = mongoose.model('Cars', carSchema);

module.exports = cars;
