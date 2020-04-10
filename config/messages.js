module.exports = function message(status , code , success , res) {
    
    return res.status(status).json({
        
        success:success,
        code:code
    })

    



}