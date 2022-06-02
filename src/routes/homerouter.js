const express = require('express'); 
const homeRouter = express.Router();
const verify = require('./verifytoken');

homeRouter.get('/',verify,function(req,res){

    res.render('home',{});
    
})


module.exports = homeRouter;