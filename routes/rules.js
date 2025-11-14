const express = require('express');
const router = express.Router();
const rulesCtrls = require('../controllers/rulesCtrls');

router.get('/', rulesCtrls.getRulesPage);

module.exports = router;