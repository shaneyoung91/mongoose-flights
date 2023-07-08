const Ticket = require('../controllers/tickets');
const Flight = require('../controllers/flights')

module.exports = {
    create,
    new: newTicket
}

async function newTicket(req, res) {
    res.render('tickets/new', {errorMsg: ''})
}

async function create(req, res) {
    try {
        const flight = await Flight.findById(req.params.id);
        flight.tickets.push(req.body.ticketId);
        await flight.save();
        res.redirect(`/flights/${flight._id}`)
    } catch(err) {
        console.log(err);
    }
}