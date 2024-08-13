var express = require('express');
var router = express.Router();

var internController = require('../controllers/internController')

router.post('/createIntern',internController.createIntern);

router.post('/findIntern',internController.findIntern);

router.post('/getIntern',internController.getIntern);

router.delete('/delete/:id',internController.deleteIntern)


module.exports = router;
