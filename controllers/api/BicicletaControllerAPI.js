let Bicicleta = require("../../models/Bicicleta");

// GET - Listar bicicletas
exports.bicicleta_list = function(req, res) {
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });    
};

// POST - Crear bicicleta
exports.bicicleta_create = function(req, res){
    let bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.latitud, req.body.longitud];

    Bicicleta.add(bici);

    res.status(201).json({
        bicicleta: bici
    });
};

// DELETE
exports.bicicleta_delete = function(req,res){
    Bicicleta.removeById(parseInt(req.body.id));
    res.status(204).send();
};

// PUT - Actualizar bicicleta
exports.bicicleta_update = function(req,res){

    let bici = Bicicleta.findById(req.body.id);

    if(!bici){
        return res.status(404).json({error:"Bicicleta no encontrada"});
    }

    bici.color = req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [req.body.latitud, req.body.longitud];

    res.status(200).json({
        bicicleta: bici
    });
};