const express = require('express');
const router = express.Router();
const indexCtrls = require('../controllers/indexCtrls');

router.get('/', indexCtrls.getHomePage);

module.exports = router;