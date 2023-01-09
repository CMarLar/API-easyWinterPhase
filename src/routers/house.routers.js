const {Router} = require('express');
const router = Router();
const houseCtrl = require("../controller/house.controller");

router.post('/housesmanagement',houseCtrl.postHouse);//crear casa
router.put("/createhouse",houseCtrl.putHouse);//modificar casa
router.delete("/housesmanagement",houseCtrl.deleteHouse);//eliminar casa
router.put("/addpnc",houseCtrl.putHouse)//modificar personaje jugador en addnpc
router.put("/phase4",houseCtrl.putHouse)//modificar nivel de manutención en phase4


module.exports = router;