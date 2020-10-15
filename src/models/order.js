import mongoose,{Schema} from 'mongoose'

const schema=new Schema({
     __waiter:{type:mongoose.Types.ObjectId,required:true},
     __table:{type:mongoose.Types.ObjectId,required:true},
     __cashier:{type:mongoose.Types.ObjectId},
     total_amount:{type:Number,required:true},
     ordered_items:[
         {
             __product:{type:mongoose.Types.ObjectId,required:true},
             quantity:{type:Number,required:true},
             product_price_current_time:{type:Number,required:true}
         }
     ],
     status:{type:String,default:'active',required:true,enum:['active','void']}
},{timestamps:true})
module.exports=mongoose.model('Order',schema);