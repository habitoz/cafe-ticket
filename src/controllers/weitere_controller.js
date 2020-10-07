import Controller from  './Controller';
import WeitereService from  "./../services/weitere_service";
import Weitere from  "./../models/weitere";
const weitere_service = new WeitereService(Weitere);

class WeitereController extends Controller {

  constructor(service) {
    super(service);
  }
  
}

export default new WeitereController(weitere_service);
