const {Router} = require('express');
const router = Router();
const charCtrl = require("../controller/character.controller");

router.post('/addnpc',charCtrl.postChar);//nuevo personaje
router.post('/createhouse',charCtrl.postChar)//nuevo personaje principal y escudero
router.get("/addnpc",charCtrl.getChar)//recoge personajes de una casa
router.delete("/addnpc",charCtrl.deleteChar)//borra borra un personaje



module.exports = router;
