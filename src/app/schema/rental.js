const mongoose = require('mongoose');
const Util = require('../util/util');

const rentalSchema = mongoose.Schema({        
    nome: {
        type: String,
        require: true
    },
    cnpj: {
        type: String,
        unique: true,
        require: true
    },
    atividades: {
        type: String,
        require: true
    },
    endereco: [{
        cep: { 
            type: String, 
            require: true 
        },
        complemento: { 
            type: String 
        },
        bairro: { 
            type: String, 
            require: true 
        },
        number: { 
            type: String, 
            require: true 
        },
        localidade: { 
            type: String, 
            require: true 
        },
        uf: { 
            type: String, 
            require: true 
        },
        isFilial: { 
            type: Boolean, 
            require: true 
        },
    }],
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

Util.hideInfos(rentalSchema);

const rental = mongoose.model('Rental', rentalSchema);

module.exports = rental;
