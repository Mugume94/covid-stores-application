const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// get and display product page
router.get('/', (req, res) => {
    res.render('product')
})

// posting the products in the data base
router.post('/', async(req, res)=>{
    //console.log(req.body)
    const product = new Product(req.body);
    try{
      await product.save()
      res.send('Thank you entering the details!');
    }catch (err){
      res.send('sorry! something went wrong');
      console.log(err)
    }

})

module.exports = router;