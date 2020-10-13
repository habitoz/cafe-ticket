import Controller from  './Controller';
import UserService from  "../services/user_service";
import User from  "./../models/users";
const user_service = new UserService(User);

class UserController extends Controller {

  constructor(service) {
    super(service);
  }
  
}

export default new UserController(user_service);
