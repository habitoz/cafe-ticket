import Controller from  './Controller';
import ClerckService from  "./../services/clerck_service";
import Clerck from '../models/clerck.js';
const clerck_service = new ClerckService(Clerck);

class ClerckController extends Controller {

  constructor(service) {
    super(service);
  }
  
}

export default new ClerckController(clerck_service);
