const mongoose = require('mongoose');

const connect = require('./mongo-connect');
const User = require('./models/User/User');

connect(() => {

    let user = new User({
        username: 'User1',
        password: '1111'
    });

    user.save((error, result) => {

        if(error)
            return console.log(error);

        console.log('Создалась', result);

    });

});