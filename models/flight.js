const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'Delta', 'Alaska']
    },
    airport: {
        type: String,
        enum: ['PDX', 'LAX', 'DFW', 'SFO', 'DEN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
    }
});

// const sortedFlight = Flight.sort((a, b) => a.departs - b.departs);

module.exports = mongoose.model('Flight', flightSchema);