import mongoose,{Schema} from 'mongoose'

const schema=new Schema({
     product_name:{type:String,required:true,trim:true},
     product_code:{type:String,required:true,trim:true},
     description:{type:String}
},{timestamps:true})
module.exports=mongoose.model('Product',schema);