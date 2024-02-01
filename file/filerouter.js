const express = require('express');
const route = express.Router();
const cors = require('cors');
const filedata= require('./filemodal')
const multer=require('multer')

let corsoptions={
    origin:['http://localhost:2000']
}
const storage = multer.diskStorage({
    destination:'images/',
    filename:(req,file,pic)=>{
        pic(null,Date.now()+'-'+file.originalname);
    },
});
 const upload = multer({storage})


route.post('/user/create' ,cors(corsoptions), upload.single('image') ,async(req,res)=>{

    if(!req.file){
        return res.status(400).json({error:'nofile'})
    }
    var data={
        username:req.body.username,
        mobileno:req.body.mobileno,
        image:req.file.filename,
        audio:req.file.filename,
        video:req.file.filename,
        file:req.body.filename
      
         }
    try{
        const photo= await filedata.create(data)
        return res.status(200).json(photo)
    }
    catch(err){
        return res.status(500).json(err)
    }
});
module.exports=route;