import Controller from  './Controller';
import ProductService from  "./../services/product_service";
import Product from  "./../models/products";
const product_service = new ProductService(Product);

class ProductController extends Controller {

  constructor(service) {
    super(service);
  }
  
}

export default new ProductController(product_service);
