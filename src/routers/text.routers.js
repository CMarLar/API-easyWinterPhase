 const {Router} = require('express');
 const router = Router();
 const textCtrl = require("../controller/text.controller");


router.get("/phase1:/text_id=1", textCtrl.getTextPhase1);
router.get("/phase2:/text_id=2", textCtrl.getTextPhase2);
router.get("/phase8:/text_id=3", textCtrl.getTextPhase8);
router.get("/phase9:/text_id=4", textCtrl.getTextPhase9a);
router.get("/phase9:/text_id=5", textCtrl.getTextPhase9b);


 module.exports = router;