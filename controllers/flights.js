const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newFlight,
    create,
    index,
    show,
    delete: deleteFlight
}

async function deleteFlight(req, res) {
    try{
        const flight = await Flight.findByIdAndDelete(req.params.id)
        res.redirect('/flights')
    } catch (err) {
        console.log(err)
    }
}

async function show(req, res) {
    try {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({ flight: flight._id });

    res.render('flights/show', {
        ticket: tickets,
        flight: flight,
        title: 'Flight Detail'
    });
    } catch (err) {
    console.log(err);
    }
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