const express = require('express');
var cookieParser = require('cookie-parser')

const getTours = require('./parser');

const app = express();

app.use(cookieParser());

var templating = require('consolidate');
app.engine('hbs', templating.handlebars);
app.set('view engine', 'hbs');

app.set('views', __dirname + '/views');

app.get('/', function(req, res) {

    getTours().then((data) => {
        res.render('tours', 
        { 
            title: 'Туры по миру',
            tours: data,
        });
    })
});

app.listen(3000);