var express = require('express');
var router = express.Router();

var employeController = require('../controllers/internController')

router.post('/createIntern',employeController.createIntern);

router.post('/findIntern',employeController.findIntern);


module.exports = router;
