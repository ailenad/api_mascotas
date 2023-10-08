const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    created: {
        type: Date,
        default: Date.now
    },
   user: {
        type: Schema.Types.ObjectId,
        ref: 'User' // Referencia a otra entidad
    },
    alert:{
        type: Schema.Types.ObjectId,
        ref: 'Alert'// Puede estar relacionada con una mascota
    }

})

const Comment = mongoose.model( 'Comment',commentSchema );
module.exports = Comment;
