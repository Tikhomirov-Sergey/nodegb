const mongoose = require('mongoose');

const Author = require('./models/Autor');
const Book = require('./models/Book');

mongoose.connect('mongodb://localhost/AutorsDB', (err) => {

    if (err) throw err;

    var jamieAuthor = new Author();

    jamieAuthor._id = new mongoose.Types.ObjectId(),
        jamieAuthor.name = {
            firstName: 'Jamie',
            lastName: 'Munro'
        },
        jamieAuthor.biography = 'Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js.';
    jamieAuthor.twitter = 'https://twitter.com/endyourif';
    jamieAuthor.facebook = 'https://www.facebook.com/End-Your-If-194251957252562/';

    jamieAuthor.save(function (err) {
        if (err) throw err;

        console.log('Author successfully saved.');

        var mvcBook = new Book();
        mvcBook._id = new mongoose.Types.ObjectId();
        mvcBook.title = 'ASP.NET MVC 5 with Bootstrap and Knockout.js';
        mvcBook.author = jamieAuthor._id;
        mvcBook.ratings =
            [{
                summary: 'Great read'
            }];


        mvcBook.save(function (err) {
            if (err) throw err;

            console.log('Book successfully saved.');
        });

        var knockoutBook = new Book();
        knockoutBook._id = new mongoose.Types.ObjectId();
        knockoutBook.title = 'Knockout.js: Building Dynamic Client-Side Web Applications';
        knockoutBook.author = jamieAuthor._id;


        knockoutBook.save(function (err) {
            if (err) throw err;

            console.log('Book successfully saved.');
        });

    });
});