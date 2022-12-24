const {Router} = require('express');
const router = Router();
const charCtrl = require("../controller/character.controller");

router.post('/addnpc',charCtrl.postChar);//nuevo personaje



module.exports = router;
