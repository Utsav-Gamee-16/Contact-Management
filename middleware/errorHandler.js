
const {constats} = require('../constants')
const errorHandler = (err,req,res,next) =>{
    const statusCode = res.statusCode ? res.statusCode :500
    switch(statusCode){
        case constats.VALIDATION_ERROR:
            res.json({title : "Validation Failed",message:err.message,stackTrace:err.stack})
            break
        case constats.NOT_FOUND:
            res.json({title : "Not Found",message:err.message,stackTrace:err.stack})
            break
        case constats.UNAUTHORIZED:
            res.json({title : "Unauthorized.",message:err.message,stackTrace:err.stack})
            break
        case constats.FORBIDDEN:
            res.json({title : "Forbidden.",message:err.message,stackTrace:err.stack})
            break
        case constats.SERVER_ERROR:
            res.json({title : "Server Error.",message:err.message,stackTrace:err.stack})
            break
        default:
            console.log("No Err,All Good !");
            break
    }
}

module.exports = errorHandler