const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', {title: 'Flight Detail', flight});
}

async function index(req, res) {
    const allFlights = await Flight.find({}).sort({departs: 1})
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