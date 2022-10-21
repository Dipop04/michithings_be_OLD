const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    id_producto:{type:String, required:true, max:60},
    nombre_producto:{type:String, required:true, max:60},
    descripcion:{type:String, required:true, max:500},
    precio:{type:Number, required:true, max:1000000},
    disponibilidad:{type:Number, required:true, max:100},
    codigo_producto:{type:String, required:true, max:12},
    imagen1:{type:String, required:false, max:100},
    imagen2:{type:String, required:false, max:100},
    imagen3:{type:String, required:false, max:100},
    tamano:{type:String, required:false, max:100},
    raza:{type:String, required:false, max:100},
    etapa_vida:{type:String, required:false, max:100},
    tipo_producto:{type:String, required:false, max:100},
    marca:{type:String, required:false, max:100},
    peso:{type:Number, required:true, max:50},
    beneficios:{type:String, required:false, max:500},
    caracteristicas:{type:String, required:false, max:500}
});

module.exports = mongoose.model("productos", ProductosSchema);