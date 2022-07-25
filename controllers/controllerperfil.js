const controlador ={}

controlador.perfilvendedor=(req,res)=>{
    res.render('perfilV.ejs')
};
controlador.perfilcomprador=(req,res)=>{
    res.render('perfilC.ejs')
};
controlador.editarperfil=(req,res)=>{
    res.render('editarPerfil.ejs')
};



module.exports=controlador;