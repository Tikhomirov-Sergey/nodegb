const mongoose = require('mongoose');

const connect = require('./mongo');
const Task = require('./models/Task');

connect(() => {
    new Promise((resolve, reject) => {
        
        let task = new Task();
        task.name = 'Таска';
        task.state = 'Active'

        console.log('Cj[hfytybt')

        task.save((error, result) => {

            console.log('Ошибка', error)

            if(error) return reject(error)
            console.log('Создалась', result)
            resolve(result)
        })
    })
})

