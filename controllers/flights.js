const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index
}

async function index(req, res) {
    const allFlights = await Flight.find({})
    res.render('flights/index', {flights: allFlights})
}

async function create(req, res) {
    console.log(req.body)
    try {
        await Flight.create(req.body)
        res.redirect('/flights')
    } catch (err) {
        res.render('flights/new', {errorMsg: err.message})
    }
    console.log(req.body);
}

function newFlight(req, res) {
    res.render('flights/new', {errorMsg: ''})
}