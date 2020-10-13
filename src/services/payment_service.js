import Service from './Service';
import moment from 'moment';

class PaymentService extends Service {
  constructor(model) {
    super(model);
  }
  async netSale({id}){
    try {
      let item = await this.model.findById(id);
      return {
        error: false,
        statusCode: 202,
        item
      }; 
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        error
      };
    }
  }
  async grossSale(filterData){
    try {
      let sdate=moment.utc(filterData.startDate).format('YYYY-MM-DD');
      let edate=moment.utc(filterData.endDate).format('YYYY-MM-DD');

      const data=await this.model.aggregate([
        {
          $match: {
            createdAt: {
              $gte:sdate,$lte:edate
            }
          }
        },
        {
          $unwind: "$ordered_items"
        },
        {
          $group: {
            _id: "$createdAt",
            total: {
              "$sum": {
                $multiply: [
                  "$ordered_items.product_price_current_time",
                  "$items.quantity"
                ]
              }
            }
          }
        },
      ]).exec()
      return {
        error: false,
        statusCode: 202,
        data
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        error
      };
    }
  }
  async grossProfit({id}){
    try {
      let item = await this.model.findById(id);
      return {
        error: false,
        statusCode: 202,
        item
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        error
      };
    }
  }
};

export default PaymentService;
