const router = require('express').Router();

const { authRouter, userRouter } = require('.');

router.use('/auth', authRouter);
router.use('/users', userRouter);

module.exports = router;
