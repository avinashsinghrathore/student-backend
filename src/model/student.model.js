const mongoose = require('mongoose');

const { Schema } = mongoose;

const studentSchema = new Schema({   
 s_id: Number,
 name: String,
 dob: String,
 address: String,
 class: Number,   
 phone_no: Number
});

exports.Student = mongoose.model('Student', studentSchema);