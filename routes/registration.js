const express = require('express');
const router = express.Router();
const registrationCtrls = require('../controllers/registrationCtrls');

router.get('/', registrationCtrls.getRegistrationPage);

router.post('/', registrationCtrls.createRegistration);

module.exports = router;