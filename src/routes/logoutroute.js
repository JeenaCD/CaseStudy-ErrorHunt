const express = require('express');
const logoutRouter = express.Router();

logoutRouter.get('/',function(req,res){
    res.cookie('jwt','',{maxAge:1});
    res.render('index',{});    
})

module.exports = logoutRouter;