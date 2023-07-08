const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    seat: {
        type: String,
        required: true,
        match: /^[A-F][1-9][0-9]?$/
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    flight: [{type: Schema.Types.ObjectId, ref: 'Flight'}]
});

module.exports = mongoose.model('Ticket', ticketSchema)