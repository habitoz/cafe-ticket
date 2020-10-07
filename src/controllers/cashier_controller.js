import Controller from  './Controller';
import CashierService from  "./../services/cashier_service";
import Cashier from  "./../models/cashier";
const cashier_service = new CashierService(Cashier);

class CashierController extends Controller {

  constructor(service) {
    super(service);
  }
  
}

export default new CashierController(cashier_service);
