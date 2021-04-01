const User = require('../dataBase/models/User');

module.exports = {
  findUsers: () => User.find(),
  findUserById: (userId) => User.findById(userId),
  addUser: (userObject) => User.create(userObject)
};
