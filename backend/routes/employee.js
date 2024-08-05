var express = require('express');
var router = express.Router();

var employeController = require('../controllers/employeController')

/* GET users listing. */

router.post('/createEmploye',employeController.createEmploye);

router.post('/findEmploye',employeController.findEmploye);


module.exports = router;
