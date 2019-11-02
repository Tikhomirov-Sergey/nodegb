const User = require('./User');
const connect = require('../../mongo-connect');

class UserHelper {

    static verifyUser(username, password) {
        return connect(() => {
            return User.findOne({username, password});
        });
    }

    static findById(id) {
        return connect(() => {
            return User.findById(id);
        });
    }

    static findAllUsers() {
        return connect(() => {
            return User.find();
        });
    }

    static createUser(username, password) {
        return connect(() => {
            return new User({username, password}).save();
        });
    }

}

module.exports = UserHelper;