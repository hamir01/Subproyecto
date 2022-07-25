const express = require('express');
const rutaLogin = express.Router();

rutaLogin.get("/login",(req,res)=>{
    res.render('login.ejs');
});

module.exports=rutaLogin;
