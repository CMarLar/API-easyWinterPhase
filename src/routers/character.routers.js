const {Router} = require('express');
const router = Router();
const charCtrl = require("../controller/character.controller");

router.post('/addnpc',charCtrl.postChar);//nuevo personaje
router.post('/createhouse',charCtrl.postChar)//nuevo personaje principal y escudero



module.exports = router;
