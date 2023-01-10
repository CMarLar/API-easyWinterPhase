const {Router} = require('express');
const router = Router();
const playerCtrl = require("../controller/player.controller");

router.post('/addplayers',playerCtrl.postPlayer);//nuevo usuario

router.get("/phases",playerCtrl.getPlayers);//mostrar nombre en las phases de invierno
router.get("/campaignsPlayers",playerCtrl.getPlayersByCampaign);

router.put('/housesmanagement', playerCtrl.putPlayersHouse);
router.put('/currentcampaignPlayer', playerCtrl.putPlayers);
router.put('/phase9', playerCtrl.putPlayers);//cambiar winterPhaseDone del currentPlayer en phase9
router.put('/winterphasemain', playerCtrl.putPlayers);//poner a cero todos los winterPhaseDone de los jugadores


module.exports = router;
