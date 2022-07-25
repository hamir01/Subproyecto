const express = require('express');
const rutaContraseña = express.Router();

rutaContraseña.get("/cambiarcontrasena",(req,res)=>{
    res.render('cambiarContraseña.ejs');
});

module.exports=rutaContraseña;
