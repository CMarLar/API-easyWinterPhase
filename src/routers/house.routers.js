const {Router} = require('express');
const router = Router();
const houseCtrl = require("../controller/house.controller");

router.post('/createHouse',houseCtrl.postHouse);//crear casa
router.put("/createhouse",houseCtrl.putHouse);//modificar casa
router.delete("/createhouse",houseCtrl.deleteHouse);//eliminar casa
// Debería haber una función de crear personajes aquí para crear los dos primeros (el pj principal y su escudero en la página crear casa? Si no, vamos a tener que llevarnos la creación de personjes principales en addnpc)


module.exports = router;

module.exports = router;