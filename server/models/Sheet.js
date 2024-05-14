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
    char_strength: {
        type: Number
    },
    char_dexterity: {
        type: Number
    },
    char_constitution: {
        type: Number
    },
    char_intelligence: {
        type: Number
    },
    char_wisdom: {
        type: Number
    },
    char_charisma: {
        type: Number
    },
    

});

const Sheet = mongoose.model('Sheet', sheetSchema);

module.exports = Sheet;