const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const PlaceImageSchema = new Schema({
    id: {type: Number, require: true},
   img: {type: String, require: true}
});
const TicketSchema = new Schema({
    id: {type: Number, require: true},
    ticketAdult: {
        type: Number,
    },
    ticketChild: {
        type: Number
    }
});
const TimeSchema = new Schema({
    id: {type: Number, require: true},
    day: {type: String, require: true},
    time: {type: String, require: true}
})

const PlaceSchema = new mongoose.Schema({
    placeName:  {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    openingTime: [TimeSchema],
    ticket: [TicketSchema],
    district: {
        type: String,
        require: true
    },
     placeImage: [PlaceImageSchema]
});

const Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;