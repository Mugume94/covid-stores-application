const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const registrationSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  username: {
    type: String,
    trim: true,
  },
  phone_number: {
    type: String,
    trim: true,
  },
  id_no: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  employee_no: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: 'please enter password'
  },
});

registrationSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Registration', registrationSchema);