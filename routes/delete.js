const express = require('express');

const router = express.Router();


const Del = require('../controllers/del_task');
router.get('/', Del.del);

module.exports = router;