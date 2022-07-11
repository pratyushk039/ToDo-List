const express = require('express');

const router = express.Router();


const Add = require('../controllers/add_task');
router.post('/', Add.add);


module.exports = router;