const Servicios = require('../models/servicios');

exports.nuevoServicio = async(req,res, next) =>{
    const servicio = new Servicios(req.body);

    try {
        await servicio.save();
        res.json({mensaje : 'AGREGADO'})
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.boletasServicio = async(req, res, next) =>{
    const servicio = await Servicios.find({ $or: [{tipoServicio: req.params.tipoServicio}, {statusPago: req.params.statusPago }]});
    if(!servicio){
        res.json({mensaje : 'NO EXISTE EL SERVICIO'});
        return next()
    }
    res.json(servicio);
}

