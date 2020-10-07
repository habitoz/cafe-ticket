import jwt from "jsonwebtoken"
const config=require('config');
import Clerck from '../models/clerck.js'

const auth = async(req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    jwt.verify(token,config.get('secret_key'), async function(err, decoded) {
        if (err) {
            return res.json({ success: false, message: 'Unauthorized Access!.' });
        } else {
            try {
               const user =  await Clerck.findOne({ _id: decoded._id}).then(result=>{   
                return result               
               })
                if (!user) {
                    throw new Error()
                }
                req.role = 'clerck';
                next()
            } catch (error) {

                res.status(401).send({ error: 'Unauthorized Access!' })
            }
        }
    });
}

module.exports = auth