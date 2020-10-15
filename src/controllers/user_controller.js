import Controller from  './Controller';
import UserService from  "../services/user_service";
import User from  "./../models/users";
const user_service = new UserService(User);

class UserController extends Controller {

  constructor(service) {
    super(service);
  }
  async login(req, res) {
    let response = await user_service.login(req.body);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response);
  }
}

export default new UserController(user_service);
