const mongoose = require('mongoose');

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected');
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

const connect = (action, database) => {

    return new Promise((resolve, reject) => {

        mongoose.connect(`mongodb://localhost/${database || 'UserDB'}`, { autoReconnect: true }, async error => {

            if(error) resolve({error});

            try {
                const result = await action();
                resolve({ error: null, result })
            } catch(error) {
                resolve({error});
            }

        })
    });
}

module.exports = connect;