const mongoose = require('mongoose')

const employCollection = new mongoose.Schema({
    nombre: {
        type:String,
        require: true
    },
    estado: {
        type: Boolean,
        require: true
    },
    sueldo: {
        type: Number,
        require: true
    }

}) 

module.exports = mongoose.model('Employ', employCollection)