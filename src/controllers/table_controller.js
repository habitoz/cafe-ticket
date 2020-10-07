import Controller from  './Controller';
import TableService from  "./../services/table_service";
import Table from  "./../models/table";
const table_service = new TableService(Table);

class TableController extends Controller {

  constructor(service) {
    super(service);
  }
  
}

export default new TableController(table_service);
