const router = require('express').Router();

const { authUser } = require('../controllers');

router.get('/', authUser.auth);

module.exports = router;
