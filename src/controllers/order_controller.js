import Controller from  './Controller';
import OrderService from  "./../services/order_service";
import Order from  "./../models/order";
const order_service = new OrderService(Order);

class OrderController extends Controller {

  constructor(service) {
    super(service);
  }
  
}

export default new OrderController(order_service);
