const mongoose = require('mongoose'); 

const userSchema = mongoose.Schema({
    name: {
      firstName: String,
      lastName: String
    },
    created: Date
});

module.exports = mongoose.model('User', userSchema);;