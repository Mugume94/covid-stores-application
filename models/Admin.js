const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
    },
    location: String,
    phone_number: String,
    id_no: String,
    date: String,
    next_date: String,
    amount: String,
    email: String,
    serial_no: String,
    reference_no: String,
    item_name: {
      type: String,
      required: 'please enter password'
    },
  });







module.exports = mongoose.model('Admin', adminSchema);