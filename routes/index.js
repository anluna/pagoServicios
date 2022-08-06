const express = require('express');
const router = express.Router();
const servicioController = require('../controllers/servicioController');
const pagosController = require('../controllers/pagosController');

module.exports = function (){
    //AGREGAR SERVICIOS POST 
    router.post('/servicios', servicioController.nuevoServicio);

    router.post('/pagos', pagosController.nuevoPago);

    return router;
}