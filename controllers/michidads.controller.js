const Michidads = require("../models/michidads.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req,res) {
    let michidad = new Michidads({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        email: req.body.email,
        contrasena: req.body.contrasena,
        documento: req.body.documento,
        telefono: req.body.telefono,
        suscripcion: req.body.suscripcion,
        condiciones: req.body.condiciones,
        direccion: req.body.direccion,
        barrio: req.body.barrio,
        ciudad: req.body.ciudad,
        departamento: req.body.departamento
    })

    michidad.save(function (err) {
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el michidad"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El michidad se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Michidads.find(function(err, michidads){
        res.json(michidads)
    })
}

exports.findOne = function(req,res){
    Michidads.findOne({_id: req.params.id},function(err, michidad){
        res.json(michidad)
    })
}

exports.update = function(req,res){
    let michidad = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        email: req.body.email,
        contrasena: req.body.contrasena,
        documento: req.body.documento,
        telefono: req.body.telefono,
        suscripcion: req.body.suscripcion,
        condiciones: req.body.condiciones,
        direccion: req.body.direccion,
        barrio: req.body.barrio,
        ciudad: req.body.ciudad,
        departamento: req.body.departamento
    }

    Michidads.findByIdAndUpdate(req.params.id, {$set: michidad}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el michidad"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El michidad modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Michidads.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el michidad"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El michidad eliminado correctamente"
        res.json(response)
    })
}