const Task = require('../models/Task');

class TaskHelper {

    static getTaskById(id) {
        return Task.findById(id);
    }

    static getAllTasks() { 
       return Task.find().sort('date').exec();
    }

    static deleteTaskById(id) {
        return Task.findByIdAndDelete(id);
    }

    static createTask(newParams) {
        return new Task(newParams).save();
    }

    static changeTask(id, newParams) {
        return Task.findByIdAndUpdate(id, newParams);
    }
}

module.exports = TaskHelper;