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
    creatorId: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('Trip', tripSchema);