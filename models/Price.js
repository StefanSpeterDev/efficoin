const mongoose = require('mongoose');

const PriceSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: [true, 'Please add a price'],
        unique: false,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },

})

module.exports = mongoose.models.Price || mongoose.model('Price', PriceSchema);
