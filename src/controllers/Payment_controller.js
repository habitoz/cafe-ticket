import Controller from  './Controller';
import PaymentService from  "./../services/payment_service";
import Payment from  "./../models/payment";
const payment_service = new PaymentService(Payment);

class PaymentController extends Controller {

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

export default new PaymentController(payment_service);
