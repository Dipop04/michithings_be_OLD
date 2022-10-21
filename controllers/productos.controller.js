const Productos = require("../models/productos.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req,res) {
    let producto = new Productos({
        id_producto: req.body.id_producto,
        nombre_producto: req.body.nombre_producto,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        disponibilidad: req.body.disponibilidad,
        codigo_producto: req.body.codigo_producto,
        imagen1: req.body.imagen1,
        imagen2: req.body.imagen2,
        imagen3: req.body.imagen3,
        tamano: req.body.tamano,
        raza: req.body.raza,
        etapa_vida: req.body.etapa_vida,
        tipo_producto: req.body.tipo_producto,
        marca: req.body.marca,
        peso: req.body.peso,
        beneficios: req.body.beneficios,        
        caracteristicas: req.body.caracteristicas
    })

    producto.save(function (err) {
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Productos.find(function(err, productos){
        res.json(productos)
    })
}

exports.findOne = function(req,res){
    Productos.findOne({_id: req.params.id},function(err, producto){
        res.json(producto)
    })
}

exports.update = function(req,res){
    let producto = {
        id_producto: req.body.id_producto,
        nombre_producto: req.body.nombre_producto,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        disponibilidad: req.body.disponibilidad,
        codigo_producto: req.body.codigo_producto,
        imagen1: req.body.imagen1,
        imagen2: req.body.imagen2,
        imagen3: req.body.imagen3,
        tamano: req.body.tamano,
        raza: req.body.raza,
        etapa_vida: req.body.etapa_vida,
        tipo_producto: req.body.tipo_producto,
        marca: req.body.marca,
        peso: req.body.peso,
        beneficios: req.body.beneficios,        
        caracteristicas: req.body.caracteristicas
    }

    Productos.findByIdAndUpdate(req.params.id, {$set: producto}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Productos.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto eliminado correctamente"
        res.json(response)
    })
}