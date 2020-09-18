const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
   username: {
       type:String,
       required: true,
       unique: true,
       trim: true,
       minlength: 3
   },
},{
    //cria automaticamente campos relacionados á data de criação etc...
    timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;