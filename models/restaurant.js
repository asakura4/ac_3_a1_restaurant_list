const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    image: {
        type: String
    },
    category :{
        type: String,
        required: true
    },
    rate: {
        type: Number,
        retquired: true
    }

});

module.exports = mongoose.model('Restaurant', restaurantSchema);