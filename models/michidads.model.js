const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MichidadsSchema = new Schema({
    nombres:{type:String, required:true, max:60},
    apellidos:{type:String, required:true, max:40},
    email:{type:String, required:true, max:40},
    contrasena:{type:String, required:true, max:50},
    documento:{type:String, required:true, max:12},
    telefono:{type:String, required:false, max:13},
    suscripcion:{type:Boolean, required:false},
    condiciones:{type:Boolean, required:true},
    direccion:{type:String, required:true, max:150},
    barrio:{type:String, required:false, max:150},
    ciudad:{type:String, required:false, max:150},
    departamento:{type:String, required:false, max:150}
});

module.exports = mongoose.model("michidads", MichidadsSchema);