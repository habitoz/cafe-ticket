import Service from './Service';
import Payment from '../models/payment'
import Order from '../models/order';
import moment from 'moment'
import mongoose from 'mongoose'
class AdminService extends Service {
  constructor(model) {
    super(model);
  }
  async crossCheck(query){
        try {
          const today = moment(query.date).startOf('day');
          if(query.waiter){
            console.log(query.waiter);
            let paymentHistory=await Payment.aggregate([
              {$match:{
                createdAt: {
                       $gte: today.toDate(),
                       $lte: moment(today).endOf('day').toDate()
                     },
                     status:'paid',
                     __waiter:mongoose.Types.ObjectId(query.waiter)
              }
            },
            { $group: { _id: "$__waiter", total: { $sum: "$total_amount" } } }
            ]).exec();
            let orderHistory=await Order.aggregate([
              {$match:{
                createdAt: {
                       $gte: today.toDate(),
                       $lte: moment(today).endOf('day').toDate()
                     },
                     status:'active',
                     __waiter:mongoose.Types.ObjectId(query.waiter)
              }
            },
            { $group: { _id: "$__waiter", total: { $sum: "$total_amount" } } }
            ]).exec();
            return {
              error: false,
              statusCode: 200,
              paymentHistory,
              orderHistory
            };
  
          }
          let paymentHistory=await Payment.aggregate([
            {$match:{
              createdAt: {
                     $gte: today.toDate(),
                     $lte: moment(today).endOf('day').toDate()
                   },
                   status:'paid'
            }
          },
          { $group: { _id: "$__waiter", total: { $sum: "$total_amount" } } }
          ]).exec();
          let orderHistory=await Order.aggregate([
            {$match:{
              createdAt: {
                     $gte: today.toDate(),
                     $lte: moment(today).endOf('day').toDate()
                   },
                   status:'active'
            }
          },
          { $group: { _id: "$__waiter", total: { $sum: "$total_amount" } } }
          ]).exec();
          return {
            error: false,
            statusCode: 200,
            paymentHistory,
            orderHistory
          };
       
        } catch (err) {
          return {
            error: false,
            statusCode: 500
          }
        }
  }
};

export default AdminService;
