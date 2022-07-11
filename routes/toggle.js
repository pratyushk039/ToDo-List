const express = require('express');

const router = express.Router();


const Toggle = require('../controllers/tog_task');
router.post('/', Toggle.tog);

module.exports = router;