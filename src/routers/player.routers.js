const {Router} = require('express');
const router = Router();
const playerCtrl = require("../controller/player.controller");

router.post('/addplayers',playerCtrl.postPlayer);//nuevo usuario


module.exports = router;
