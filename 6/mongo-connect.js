const mongoose = require('mongoose');

mongoose.connection.on('connected', () => {
    console.log('Mongoose connect');
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnect');
})

const connect = (action, database) => {

    return new Promise((resolve, reject) => {

        mongoose.connect(`mongodb://localhost/${database || 'UserDB'}`, { auto_reconnect: true }, async error => {

            if(error) resolve(error);

            try {
                const result = await action();
                resolve({ error: null, result });
            }
            catch(error) {
                resolve(error);
            }
        });
    });
}

const gracefulExit = () => { 
    mongoose.connection.close(() => {
      console.log('Mongoose is disconnected');
      process.exit(0);
    });
}

process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

module.exports = connect;