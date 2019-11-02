const mongoose = require('mongoose');

const resultToObject = {}

const mongoConnect = (action, database) => {

    return new Promise((resolve, reject) => {
        mongoose.connect(`mongodb://localhost/${database || 'TaskDB'}`, async (error) => {

            if(error) reject(error);

            console.log('Подключено монгустка');

            try {
                const result = await action();
                resolve({error: null, result})
            } 
            catch (error) {
                resolve({error})
            }
        }) 
    });
}



module.exports = mongoConnect;