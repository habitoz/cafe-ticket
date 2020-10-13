import mongoose,{Schema} from 'mongoose'

const schema=new Schema({
    
     table_code:{type:String,required:true,trim:true},
     description:{type:String},
     status:{type:String,required:true,default:'active',enum:['active','inactive']}
},{timestamps:true})
module.exports=mongoose.model('Table',schema);