import Controller from  './Controller';
import OrderService from  "./../services/order_service";
import Order from  "./../models/order";
const order_service = new OrderService(Order);

class OrderController extends Controller {

  constructor(service) {
    super(service);
  }
  async grossSale(req, res) {
    return res.status(200).send(await this.service.grossSale(req.body));
  }
  async netSale(req, res) {
    return res.status(200).send(await this.service.netSale(req.body));
  }
  async grossProfit(req, res) {
    return res.status(200).send(await this.service.grossProfit(req.body));
  }
}

export default new OrderController(order_service);
