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
        type: Number
    },
    departs: {
        type: Date
    }
});

module.exports = mongoose.model('Flight', flightSchema);