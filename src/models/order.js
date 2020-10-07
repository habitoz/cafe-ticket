import mongoose,{Schema} from 'mongoose'

const schema=new Schema({
     __waiter:{type:mongoose.Types.ObjectId,required:true},
     __table:{type:mongoose.Types.ObjectId,required:true},
     __cashier:{type:mongoose.Types.ObjectId},
     ordered_items:[
         {
             __product:{type:mongoose.Types.ObjectId,required:true},
             quantity:{type:Number,required:true},
             product_price_current_time:{type:Number,required:true}
         }
     ],
     status:{type:String,required:true,enum:['Paid','Unpaid','Void']}
},{timestamps:true})
module.exports=mongoose.model('Order',schema);