const express = require('express');
const rutaPerfil = express.Router();
const controladorPerfil=require("../controllers/controllerperfil");

rutaPerfil.get("/perfilvendedor",controladorPerfil.perfilvendedor);

rutaPerfil.get("/perfilcomprador",controladorPerfil.perfilcomprador);

rutaPerfil.get("/editarperfil",controladorPerfil.editarperfil);

module.exports=rutaPerfil;