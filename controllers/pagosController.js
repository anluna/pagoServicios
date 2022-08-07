const Pagos = require('../models/pagos');

exports.nuevoPago = async(req, res, next) =>{
    const pago = new Pagos(req.body);

    try{
        await pago.save();
        res.json({mensaje: 'Pago guardado'})
    }catch (error){
        console.log(error);
        next();
    }
}

exports.listadoPagos = async(req, res, next) =>{
    const pago = await Pagos.find({fechaPago: req.params.fechaPago});
    if(!pago){
        res.json({mensaje : 'NO HAY PAGOS'});
        return next()
    }
    res.json(pago);
}