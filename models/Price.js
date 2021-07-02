const mongoose = require('mongoose');

const PriceSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: [true, 'Please add a price VALUE'],
        unique: true,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    variation: {
        type: Number,
        required: [true, 'Please add a price'],
        unique: true,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    time: {
        type: String,
        required: [true, 'Please add an hour'],
        unique: true,
        maxlength: [40, "Changer la forme de l'heure"]
    }

})

module.exports = mongoose.models.Price || mongoose.model('Price', PriceSchema);
