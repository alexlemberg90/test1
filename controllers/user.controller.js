const { userService } = require('../services');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userService.findUsers();
      res.json(users);
    } catch (e) {
      res.json(e.message);
    }
  },
  getSingleUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await userService.findUserById(userId);
      res.json(user);
    } catch (e) {
      res.json(e.message);
    }
  },
  createUser: async (req, res) => {
    try {
      await userService.addUser(req.body);
      res.json('user add');
    } catch (e) {
      res.json(e.message);
    }
  }
};
