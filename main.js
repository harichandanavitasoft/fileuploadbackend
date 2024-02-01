const express=require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const dotenv = require('dotenv')
const fileroute= require('./file/filerouter')
dotenv.config()
const app= express();
app.use(express.json());
app.use(cors());

let corsoptions={
    origin:['http://localhost:2000']
}
port=2000;
app.listen(port,(req,res)=>{
    console.log('listening port 2000')
});
url="mongodb://localhost:27017/filebackend"
 mongoose.connect(url)
 .then(console.log('database connected successfully'))
 .catch(err=>{
    console.log("error",err)
})
app.use('/',cors(corsoptions),fileroute)