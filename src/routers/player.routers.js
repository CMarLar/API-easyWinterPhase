const {Router} = require('express');
const router = Router();
const playerCtrl = require("../controller/player.controller");

router.post('/addplayers',playerCtrl.postPlayer);//nuevo usuario

router.get("/phases",playerCtrl.getPlayers);//mostrar nombre en las phases de invierno

router.put('/housesmanagement', playerCtrl.putPlayers)

module.exports = router;
