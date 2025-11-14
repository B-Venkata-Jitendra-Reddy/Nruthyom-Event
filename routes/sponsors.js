const express = require('express');
const router = express.Router();
const sponsorsCtrls = require('../controllers/sponsorsCtrls');

router.get('/', sponsorsCtrls.getSponsorsPage);

module.exports = router;