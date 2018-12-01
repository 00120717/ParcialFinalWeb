var express = require('express'),
    router = express.Router(),
    HotelController  = require('../controllers/HotelController');

//CREATE
router.post('/api/Hoteles',HotelController.create);

//READ 
router.get('/api/Hoteles',HotelController.getAll);
router.get('/api/Hoteles/:id',HotelController.get);

//UPDATE
router.put('/api/Hoteles/:id',HotelController.update);

//DELETE
router.delete('/api/Hoteles/:id',HotelController.delete);


module.exports = router;