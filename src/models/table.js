import mongoose,{Schema} from 'mongoose'

const schema=new Schema({
    
     table_code:{type:String,required:true,trim:true},
     description:{type:String}

},{timestamps:true})
module.exports=mongoose.model('Table',schema);