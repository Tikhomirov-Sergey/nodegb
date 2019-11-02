const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        requared: true
    },
    state: {
        type: String, 
        requared: true,
        validate: {
            validator: text => ['Active', 'Close'].includes(text),
            message: 'Некорректный тип'
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', taskSchema);