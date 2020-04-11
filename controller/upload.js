const messages = require('../config/messages');
const Datastore = require('nedb');
const filePath = new Datastore({filename:'data/db/path' , autoload:true});
const path = require('path');
const fs = require('fs');

const UploadController = ({files} , res )=>{
try{

    files.map(file =>{
    
        filePath.insert({
            name:file.originalname,
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


const getFiles = ({params} , res) =>{
    try{

        const {id} = params
        if(id){
            filePath.findOne({_id:id},(err , results)=>{
                if(err){
                    return messages(500 , false , "Error Getting Files" , res)
                }

                return res.download('../data/files/' , results.name)


            })
        }else{
        filePath.find({},(err , results)=>{

            if(err){
                return messages(500 , false , "Error Getting Files" , res)
            }
            
            return res.status(200).json({
                
                data:results
            })

        })
    }

    }catch(e){
        console.log(e);
        return messages(500 , "Server Error " , false , res)
        

    }



};


const deleteFiles = ({params} , res) => {
    try{

        const {id} = params;

        filePath.findOne({_id:id},(err , results)=>{
            if(err){
                return messages(500 , false , "Error Getting Files" , res)
            }
            fs.unlinkSync(path.resolve(`data/files/${results.name}`))
        })

        filePath.remove({_id:id});

        return messages(200, "Deleted" , true , res);



    }catch(e){
        console.log(e);
        return messages(500 , "Server Error" , false , res);
        
    }

};


const updateFile = ({body , params} , res)=>{
    try{

        const {name} = body;
        const {id} = params;

        filePath.update({_id:id} , {$set:{name}})

        return messages(200, "Updated" , true , res);



    }catch(e){
        console.log(e);
        return messages(500 , "Server Error" , false , res);
        
    }


}

module.exports ={
    UploadController,
    getFiles,
    deleteFiles,
    updateFile
}