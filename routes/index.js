const express = require('express');
const router = express.Router();
const servicioController = require('../controllers/servicioController');
const pagosController = require('../controllers/pagosController');

module.exports = function (){
    //AGREGAR SERVICIOS POST 
    router.post('/servicios', servicioController.nuevoServicio);

    //ENVIAR BOLETAS IMPAGAS
    router.get('/servicios/:tipoServicio/:statusPago', servicioController.boletasServicio);

    router.post('/pagos', pagosController.nuevoPago);

    router.get('/pagos/:fechaPago', pagosController.listadoPagos);

    router.get('/pagos/:fechaPago', pagosController.pagosPorFechas);

  

    return router;
}