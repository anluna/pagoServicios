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