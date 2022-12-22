 const {Router} = require('express');
 const router = Router();
 const textCtrl = require("../controller/text.controller");


router.get("/phase1", textCtrl.getTextPhases)

/* router.get("/phases?id=1", textCtrl.getTextPhases);
router.get("/phases?id=2", textCtrl.getTextPhases);
router.get("/phases?id=3", textCtrl.getTextPhases);
router.get("/phases?id=4", textCtrl.getTextPhases);
router.get("/phases?id=5", textCtrl.getTextPhases); */


 module.exports = router;