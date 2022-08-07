const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const iformPagosSchema = new Schema({
    metodoPago : {
        type : String,
        trim : true
    },
    numeroTarjeta : {
        type: String,
        trim : true
    },
    importeDePago : {
        type : String,
        trim: true
    },
    fechaPago : {
        type: Date,
        trim: true
    },
    codigoBarras : {
        type: String,
        trim : true
    }
});

module.exports = mongoose.model('Pagos',iformPagosSchema);