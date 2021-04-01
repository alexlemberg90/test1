const Joi = require('joi');

const { regexp } = require('../../constants');

module.exports = Joi.object({
  name: Joi.string().alphanum().min(2).max(30)
    .required(),
  email: Joi.string().regex(regexp.EMAIL_REGEX).required(),
  password: Joi.string().regex(regexp.PASSWORD_REGEX).required()
});
