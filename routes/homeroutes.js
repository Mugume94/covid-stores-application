const express = require('express');
const router = express.Router();

// get and display product page
router.get('/', (req, res) => {
    res.render('home')
})

module.exports = router;