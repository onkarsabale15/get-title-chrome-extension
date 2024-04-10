const Joi = require("joi");

module.exports = Joi.object({
    id: Joi.number().integer().positive(),
    name: Joi.string().required(),
    url: Joi.string().uri().required(),
    about: Joi.string().required(),
    bio: Joi.string().required(),
    location: Joi.string().required(),
    follower_count: Joi.number().integer().min(0),
    connection_count: Joi.string().required()
});