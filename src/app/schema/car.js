const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    modelo: {
        type: String,
        require: true
    },
    cor: {
        type: String,
        require: true
    },
    ano: {
        type: Number,
        require: true
    },
    acessorios: [{
        descricao: {
            type: String,
            unique: true
        }
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

const cars = mongoose.model('Cars', carSchema)
module.exports = cars;
