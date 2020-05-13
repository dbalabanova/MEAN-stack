const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    imagePath: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    isCreator: {
        type: Boolean,
        default:false
    },
});

module.exports = mongoose.model('Trip', tripSchema);