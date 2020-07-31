const express = require('express');
const router = express.Router();

// get and display product page
router.get('/', (req, res) => {
    res.render('product')
})

module.exports = router;