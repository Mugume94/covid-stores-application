const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin')

router.get('/', (req, res) => {
    res.render('admin')
})

router.post('/', async(req, res)=>{
    //console.log(req.body)
    const admin = new Admin(req.body);
    try{
      await admin.save()
      res.send('Thank for shopping with us!');
    }catch (err){
      res.send('sorry! something went wrong');
      console.log(err)
    }

})


module.exports = router;