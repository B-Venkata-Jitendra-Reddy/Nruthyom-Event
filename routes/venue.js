const express = require('express');
const router = express.Router();
const venueCtrls = require('../controllers/venueCtrls');

router.get('/', venueCtrls.getVenuePage);

module.exports = router;