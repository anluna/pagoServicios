const express = require('express');
const router = express.Router();
const servicioController = require('../controllers/servicioController');
const pagosController = require('../controllers/pagosController');

module.exports = function (){
    //AGREGAR SERVICIOS POST 
    router.post('/servicios', servicioController.nuevoServicio);

    //ENVIAR BOLETAS IMPAGAS
    router.get('/servicios/:statusPago', servicioController.boletasImpagas);

    //ENVIAR BOLETAS POR TIPO DE SERVICIO
    router.get('/servicios/:tipoServicio', servicioController.boletasTipoServicio);

    router.get('/servicios', servicioController.mostrarServicios);

    router.post('/pagos', pagosController.nuevoPago);

    return router;
}