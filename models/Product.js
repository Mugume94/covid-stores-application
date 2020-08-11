const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    item_name: {
        type: String,
        required: 'please enter the item name'
      },
      make: {
        type: String,
        // required: 'please enter the make'
      },
      date: {
        type: String,
        // required: 'please enter the date'
      },
      category: {
        type: String,
        // required: 'please enter the category'
      },
      serial: {
        type: String,
        // required: 'please enter the serial number'
      },
      price: {
        type: String,
        // required: 'please enter the price'
      },
      pay: {
        type: String,
        // required: 'please enter the payment'
      },
      pay_interval: {
        type: String,
        // required: 'please enter the pay interval'
      },
      description: {
        type: String,
        // required: 'please enter the description'
      },
      stock_number: {
        type: String,
        // required: 'please enter the stock number'
      },
      description: {
        type: String,
        // required: 'please enter password'
      },
      color: {
        type: String,
        // required: 'please enter password'
      },
    });







module.exports = mongoose.model('Product', productSchema);