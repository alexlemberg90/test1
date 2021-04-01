const { authService } = require('../services');

module.exports = {
  auth: (req, res) => {
    try {
      authService.authorization();
      res.json('aasas');
    } catch (e) {
      res.json(e.message);
    }
  }
};
