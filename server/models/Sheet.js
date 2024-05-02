const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const sheetSchema = new Schema ({
    player_name: {
        type: String,
    },
    char_name:{
        type: String,
    },
    char_class: {
        type: String
    },
    char_multiclass: {
        type: String
    },
    char_level: {
        type: String
    },

});

const Sheet = mongoose.model('Sheet', sheetSchema);

module.exports = Sheet;