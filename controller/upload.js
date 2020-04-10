const Datastore = require('nedb');
const filePath = new Datastore({filename:'data/db/path' , autoload:true});

const UploadController = ({files} , res )=>{
try{


    files.map(file =>{
    
        filePath.insert({
            name:file.originalname,
            path:`/data/files/${file.originalname}`,
            type:file.mimetype
        })


    })

    return res.status(200).json({
        success:true,
        code:`${files.length} has been uploaded`
    }) 


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