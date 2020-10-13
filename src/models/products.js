import mongoose,{Schema} from 'mongoose'

const schema=new Schema({
     product_name:{type:String,required:true,trim:true},
     product_code:{type:String,required:true,trim:true},
     product_price:{type:Number,required:true,trim:true,default:10},
     status:{type:String, required:true,enum:['active','inactive']},
     description:{type:String}
},{timestamps:true})
module.exports=mongoose.model('Product',schema);