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

exports.mostrarServicios = async(req, res) =>{
    try {
        const servicio = await Servicios.find({});
        res.json(servicio);
    } catch (error) {
        console.log(error);
    }
}

exports.boletasImpagas = async(req, res, next) =>{
    const servicio = await Servicios.find({statusPago : req.params.statusPago});

    if(!servicio){
        res.json({mensaje : 'NO HAY BOLETAS IMPAGAS'});
        return next()
    }

    res.json(servicio);
}

exports.boletasTipoServicio = async (req, res, next) => {
    const servicio = await Servicios.find({tipoServicio : req.params.tipoServicio});
    if(!servicio){
        res.json({ mensaje: 'NO EXISTE EL SEEVICIO'});
        return next()
    }
    res.json(servicio);
    
}

