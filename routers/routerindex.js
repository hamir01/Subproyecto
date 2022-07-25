const express = require('express');
const ruaIndex = express.Router();

ruaIndex.get("/",(req,res)=>{
    res.render('index.ejs');
});

module.exports=ruaIndex;
