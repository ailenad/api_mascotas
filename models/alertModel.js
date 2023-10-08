const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alertSchema = new Schema({
    title: String,
    description: String,
    created: {
        type: Date,
        default: Date.now
    },
   creator: {
        type: Schema.Types.ObjectId,
        ref: 'User' // Referencia a otra entidad
    },
    pet:{
        type: Schema.Types.ObjectId,
        ref: 'Pet'// Puede estar relacionada con una mascota
    },
    status:{
        type: String,
    }

})

const Alert = mongoose.model( 'Alert',alertSchema );
module.exports = Alert;
