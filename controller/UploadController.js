const Datastore = require('nedb');
const filePath = new Datastore({filename:'data/db/path' , autoload:true});

const UploadController = ({files} , res )=>{
try{










}catch(e){
    console.log(e);
    return res.status(500).json({
        success:false,
        code:"Server Error"
    })
    
}





}



module.exports ={
    UploadController
}