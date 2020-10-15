import mongoose from "mongoose";
const moment = require('moment')

class Service {
  constructor(model) {
    this.model = model;
    this.getAll = this.getAll.bind(this);
    this.get=this.get.bind(this)
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async authDetail(auth_id,select) {
    try {
      let requests = await this.model
        .findById(auth_id)
        .select(select)
        .exec();
      return {
        statusCode: 200,
        error: false,
        message: 'auth user detail',
        data: requests,
      };
    } catch (err) {
      return {
        statusCode: 500,
        error: true,
        message: 'something went wrong',
        data: null,
      };
    }
  }

  async login(data) {
    console.log('from')
    try {
      const user=await this.model.findByCredentials(data.email,data.password);
      let token;
      if(user){
        token=await user.generateToken()
      }
      return {
        err: false,
        statusCode: 200,
        message: 'login sucessfull',
        token,
        user
      };
    } catch (err) {
      return {
        error: true,
        statusCode: 401,
        message: err.message,
        data:null
      };
    }
  }
  async get({id}){
    try {
      let item = await this.model.findById(id);
      return {
        error: false,
        statusCode: 202,
        item
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        error
      };
    }
  }
  async getAll(query) {
    let { skip, limit,createdAt } = query;

    skip = skip ? Number(skip) : 0;
    limit = limit ? Number(limit) : 10;
    createdAt=createdAt?new Date(createdAt):new Date();
    console.log(createdAt);
   if(query.createdAt){
    query.createdAt=createdAt
    }
    delete query.skip;
    delete query.limit;

    if (query._id) {
      try {
        query._id = new mongoose.mongo.ObjectId(query._id);
      } catch (error) {
        console.log("not able to generate mongoose id with content", query._id);
      }
    }

    try {
      let items;
      if(query.createdAt){
        const today = moment(query.createdAt).startOf('day')
        delete query.createdAt;
       items= await this.model
        .find({...query,createdAt: {
          $gte: today.toDate(),
          $lte: moment(today).endOf('day').toDate()
        }})
        .skip(skip)
        .limit(limit).sort('-createdAt');
        }
        else{
          items=await this.model
          .find(query)
          .skip(skip)
          .limit(limit).sort('-createdAt');
        }
        let total = await this.model.countDocuments();

      return {
        error: false,
        statusCode: 200,
        data: items,
        total
      };
      
      }     
      
    catch (errors) {
      return {
        error: true,
        statusCode: 500,
        errors
      };
    }
  }

  async insert(data) {
    try {
      let item = await this.model.create(data);
      if (item)
        return {
          error: false,
          item
        };
    } catch (error) {
      console.log("error", error);
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || "Not able to create item",
        errors: error.errors
      };
    }
  }

  async update(id, data) {
    try {
      let item = await this.model.findByIdAndUpdate(id, data, { new: true });
      return {
        error: false,
        statusCode: 202,
        item
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        error
      };
    }
  }

  async delete(id) {
    try {
      let item = await this.model.findByIdAndDelete(id);
      if (!item)
        return {
          error: true,
          statusCode: 404,
          message: "item not found"
        };

      console.log("removed item", item);

      if (item.path) {
        console.log("unlink item", item.path);
        fs.unlink(item.path, function(err) {
          if (err) {
            console.log("error deleting file");
            throw err;
          }
          console.log("File deleted!");
        });
      }

      return {
        error: false,
        deleted: true,
        statusCode: 202,
        item
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        error
      };
    }
  }
}

export default Service;
