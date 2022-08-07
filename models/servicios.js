const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviciosSchema = new Schema({
    tipoServicio: {
        type: String, 
        trim : true},
    descripcion : {
        type: String,
         trim: true},
    fechaVencimiento : {
        type: Date, trim : true},
    importe: { type: String, trim: true},
    statusPago: { type: String, trim:true},
    codigoBarras :{
        type : Schema.ObjectId,
        ref: 'Pagos'
    }

});

module.exports = mongoose.model('Servicios',serviciosSchema);