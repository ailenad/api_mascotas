const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const petSchema = new Schema ({
    name: String,
    raza: String,
    age:String,
    description:String,
    created: {
        type: Date,
        default: Date.now 
    } ,
    owner:{
        type : Schema.Types.ObjectId , 
        ref:'User'
    }
})

const Pet = mongoose.model( 'Pet', petSchema );

module.exports = Pet;