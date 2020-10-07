let Joi = require('joi')
const admin_schemas = { 
  sign_up: Joi.object().keys({ 
    fullName: Joi.string().required().error(() => 'must have fullName as string'),
  email: Joi.string().email().required().error(() => 'email is required and mustbe valid'),
  phone: Joi.string().required().error(() => 'phone is required'),
  password: Joi.string().required().error(() => 'password is required'),
}),
login:Joi.object().keys({
   email:Joi.string().required(),
   password:Joi.string().required()
}),

}; 
module.exports =admin_schemas;
