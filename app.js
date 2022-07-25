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
 
 
 

servidor.listen(3000,()=>{ 

    console.log("El servidor se esta ejecuntado en el puerto 3000"); 

}); 