var mongoose = require('mongoose');
var HotelModel = require('../models/Hotel');


var HotelController = {};

HotelController.create = function(req,res){
    let newHotel = new HotelModel.Schema({
        nombre: req.body.nombre,
        ubicacion: req.body.ubicacion,
        precio: req.body.precio
    });

    newHotel.save(function(err,saved){
        if(err){
            res.status(500);
            res.json({code:500,err});
        }else{
            res.json({ok:true,saved});
        }
    })
}

HotelController.getAll = function(req,res){
    HotelModel.find({},function(err,hoteles){
        if(err){
            res.status(500);
            res.json({code:500,err});
        }else{
            res.json({ok:true,hoteles});
        }
    })
}

HotelController.get = function(req,res){
    HotelModel.findOne({id:req.params._id},function(err){
        if(err){
            res.status(500);
            res.json({code:500,err});
        }else{
            res.json({ok:true});
        }
    })
}

HotelController.update = function(req,res){
    let update = {
        nombre:req.body.nombre,
        ubicacion:req.body.ubicacion,
        precio:req.body.precio
    }

    HotelModel.findByIdAndUpdate(req.params.id,update,function(err,old){
        if(err){
            res.status(500);
            res.json({code:500,err});
        }else{
            res.json({ok:true,old,update});
        }
    });
}

HotelController.delete = function(req,res){
    HotelModel.findByIdAndUpdate(req.params.id,function(err,deleted){
        if(err){
            res.status(500);
            res.json({code:500,err});
        }else{
            res.json({ok:true,deleted});
        }
    });
}

module.exports = HotelController;

