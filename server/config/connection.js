const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env')});
const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI 
mongoose.connect(mongoUri);

module.exports = mongoose.connection;