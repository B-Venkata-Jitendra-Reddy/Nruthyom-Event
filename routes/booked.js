const express = require('express');
const router = express.Router();
const bookedCtrls = require('../controllers/bookedCtrls');

router.get('/', bookedCtrls.getBookedPage);

module.exports = router;