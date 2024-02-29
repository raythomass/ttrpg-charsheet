const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const sheetSchema = new Schema ({
    name: {
        type: String,
    },
    class: {
        type: String
    },
    level: {
        type: String
    },
});

const Sheet = mongoose.model('Sheet', sheetSchema);

module.exports = Sheet;