const Joi = require('@hapi/joi');

module.exports = {
    //validation using @hapi/joi
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);
            if(result.error){
                res.status(400).json(result.error);
            }

            if(!req.value){ req.value = {};}
            req.value['body'] = result.value;
            next();
        }
    },

    schemas: {
        authSchema: Joi.object().keys({
            email: Joi.string().email({ minDomainSegments: 2 }).required(),
            password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/).required()
        })
    }
}