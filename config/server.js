import express from "express";
import './database';
const server = express();
//import cors from "cors"
const fs=require('fs')
//const morgan = require('morgan');
//const  accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
//server.use(morgan('combined', {stream: accessLogStream}));
//server.use(cors());
server.use(express.json({limit:'10mb'}));
server.use((req,res,next)=>{
    next()
})
//server.use('/api/images',express.static('storage/images'));
import setRoutes from "./routes";
setRoutes(server);
server.use((err,req,res,next)=>{
    res.send(err.message)
})
export default server;