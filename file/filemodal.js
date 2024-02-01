const mongoose=require('mongoose');
const schema = mongoose.Schema
const upload = new schema({
    username:{
        type:String,
       
    },
    mobileno:{
        type:String,
        
    },
    image:{
        type:String,


    },
    audio:{
        type:String

    },
    video:{
        type:String,
    },
    file:{
        type:String,
    }


    
},
{
    timestamps:true
}

)
module.exports=mongoose.model('file',upload)