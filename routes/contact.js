const express = require('express');
const router = express.Router();
const contactCtrls = require('../controllers/contactCtrls');

router.get('/', contactCtrls.getContactPage);

// POST -> Save Contact Form Data
router.post("/", contactCtrls.submitContact);

module.exports = router;