const controlador ={}

controlador.mostrarInicio=(req,res)=>{
    res.render('index.ejs')
}
module.exports=controlador;