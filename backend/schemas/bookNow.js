const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
     userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
     },
    placdeId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Place',
        require: true

     },
     date: {
        type: Date,
        require: true
     }

});

const Booking = mongoose.model("Booking", BookSchema);

module.exports = BookSchema