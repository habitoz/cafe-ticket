import mongoose,{Schema} from 'mongoose'

const schema=new Schema({
    
     full_name:{type:String,required:true,trim:true},
     phone:{type:String,required:true,trim:true},
     description:{type:String}

},{timestamps:true})
module.exports=mongoose.model('Weitere',schema);