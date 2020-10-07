const Joi = require('joi'); 

const middleware = (schema, property) => { 
  return (req, res, next) => { 
    const { error } = Joi.validate(req.body, schema , {abortEarly: true}); 
    console.log(error)
    const valid = error == null;     
    if (valid) { 
      next(); 
    } 
    else { 
      const { details } = error; 
      const messages = details.map(i => {return {message:i.message}})
      res.status(422).json({ 
        error: true,
        message: "Not able to process request, please correctly insert your inputs",
        errors: messages
       }) 
    } 
  } 
} 
module.exports = middleware;