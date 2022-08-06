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