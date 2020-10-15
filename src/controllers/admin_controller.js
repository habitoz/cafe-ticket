import Controller from  './Controller';
import AdminService from  "./../services/admin_service";
import Admin from  "./../models/admin";
const admin_service = new AdminService(Admin);

class AdminController extends Controller {

  constructor(service) {
    super(service);
  }
  async crossCheck(req,res){
    let response = await admin_service.crossCheck(req.query)
    return res.status(response.statusCode).send(response)
  }
}

export default new AdminController(admin_service);
