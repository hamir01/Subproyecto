const bodyParser = require('body-parser'); 
const express=require('express'); //importa 

const servidor = express();
servidor.use(express.static(__dirname+'/public')); 

servidor.use(bodyParser.json()); 
servidor.use(bodyParser.urlencoded({extended:false}));

servidor.set('view engie','ejs'); 
servidor.set('views ',__dirname+'/views'); 

 
servidor.use(require("./routers/routerindex"));
servidor.use(require("./routers/routerlogin"));
servidor.use(require("./routers/routerperfil"));
servidor.use(require("./routers/routercontraseña"));


servidor.post("/Ingresar",(req,res)=>{
    var tipoUsuario=peticion.body.select;
    if(tipoUsuario=="Vendedor"){
       res.render("perfilV.ejs")
    }
    if(tipoUsuario=="Comprador"){
        res.render("perfilC.ejs")
     }
 
})
servidor.get("/PerfilV",(req,res)=>{
    res.render("perfilV.ejs")
});
servidor.get("/PerfilC",(req,res)=>{
    res.render("perfilC.ejs")
})
 
 

servidor.listen(3000,()=>{ 

    console.log("El servidor se esta ejecuntado en el puerto 3000"); 

}); 