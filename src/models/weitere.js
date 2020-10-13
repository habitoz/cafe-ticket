import mongoose,{Schema} from 'mongoose'

const schema=new Schema({
    
     full_name:{type:String,required:true,trim:true},
     phone:{type:String,required:true,trim:true},
     gender:{type:String,required:true},
     description:{type:String},
     status:{type:String, default:'active', enum:['active','inactive']}
},{timestamps:true})
module.exports=mongoose.model('Waiter',schema);