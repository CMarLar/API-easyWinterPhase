const {Router} = require('express');
const router = Router();
const charCtrl = require("../controller/character.controller");

router.post('/addnpc',charCtrl.postChar);//nuevo personaje
router.post('/createhouse',charCtrl.postChar);//nuevo personaje principal y escudero
router.post('/currentcampaignCharacter', charCtrl.postCharacters);
router.get("/addnpc",charCtrl.getChar);//recoge personajes de una casa
router.delete("/addnpc",charCtrl.deleteChar);//borra borra un personaje
router.delete("/housemanagementDeleteHouse",charCtrl.deleteCharByHouse);//borra los personajes de una casa
router.put("/addnpc",charCtrl.putChar);//modifica un personaje
router.get("/phase8",charCtrl.getOneChar)//para coger al personaje principal para mostrar su gloria por matrimonio.
router.put("/phase9",charCtrl.putChar);//resetea la gloria por matrimonio.



module.exports = router;
