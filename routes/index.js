const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');
router.get('/', homeController.home);
router.use('/addtask', require('./add'));
router.use('/deletetask', require('./delete'));
router.use('/toggle', require('./toggle'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));
//e.g. router.use('/users', require('./users'));


module.exports = router;