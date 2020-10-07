import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
const jwt = require('jsonwebtoken');
const config=require('config')

        var schema = new Schema({
            firstName: {
                type: String,
                 trim: true, 
                 required: true 
            },
            lastName: {
                type: String,
                 trim: true, 
                 required: true 
            },
        email : {
                type: String,
                unique: true,
                match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            },                        
            password: {
                type: String,
                required:true,
                trim:true
            },
            role:{type:String,required:true},
            emailVerified: { type: Boolean, default: false },
            
        }, {timestamps: true});
        schema.pre('save', async function (next) {
            const user = this
            if (user.isModified('password')) {
                user.password = await bcrypt.hashSync(user.password, 8)
            }
            next()
        })
        schema.methods.generateToken = async function() {
            const user = this;
            const payload={
              id:user._id,
              name:user.firstName,
              email:user.email,
              role:'admin'
            };
            const token = jwt.sign(payload,config.get('secret_key'));
            return token;
        }
        
        schema.statics.findByCredentials = async function (email, password) { 
  
            const user = await this.findOne({ email} )
  
            if (!user) { 
                //console.log(' find by credential ' + email + ' ' +password)
                throw new Error('email does not exists')
            }
            const isPasswordMatch = await bcrypt.compareSync(password, user.password)
            if (!isPasswordMatch) {
                throw new Error('email password does not match')
            }
            return user
            // if(user.status==="Verified")
            // {
            //     const isPasswordMatch = await bcrypt.compareSync(password, user.password)
            //     if (!isPasswordMatch) {
            //         throw new Error()
            //     }
            //     return user
            // }
            // else if (user.status ==="Unverified")
            // {
            //     return "Your Account is not yet verified, please give us a moment or call on 0931545451"
            // }
            // else
            // {
            //     return "You are suspended"
            // }
        }
      





export default mongoose.model("Admin",schema); 