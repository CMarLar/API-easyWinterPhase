const {Router} = require('express');
const router = Router();
const playerCtrl = require("../controller/player.controller");

router.post('/addplayers',playerCtrl.postPlayer);//nuevo usuario

router.get("/phases",playerCtrl.getPlayers);//mostrar nombre en las phases de invierno

router.put('/housesmanagement', playerCtrl.putPlayersHouse);
router.put('/currentcampaignPlayer', playerCtrl.putPlayers);
router.put('/phase9', playerCtrl.putPlayers);//cambiar winterphasedone en phase9


module.exports = router;
