const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({   

 name: String,
 email: {
    type: String,
    unique: true,
    require: true
 },  
 phone_no: {
    type: Number,
    unique: true,
 },
 age: Number,

});

exports.User = mongoose.model('User', userSchema);