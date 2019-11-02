const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        requared: true
    },
    summary: {
        type: String,
        requared: true
    },
    isbn: {
        type: String,
        requared: true
    },
    thumbnail: Buffer,
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Author'
    },
    ratings: [
        {
            summary: String,
            detail: String,
            numberOfStars: Number,
            created: { 
                type: Date,
                default: Date.now
            }
        }
    ],
    created: { 
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Book', bookSchema);