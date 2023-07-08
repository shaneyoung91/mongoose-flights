var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET /flights/new
router.get('/new', flightsCtrl.new)

// DELETE  /flights/:id
router.delete('/:id', flightsCtrl.delete)

// POST /flights
router.post('/', flightsCtrl.create)

// GET /flights
router.get('/', flightsCtrl.index)

// GET /flights/:id
router.get('/:id', flightsCtrl.show)

module.exports = router;
