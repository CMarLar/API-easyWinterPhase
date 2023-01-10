const {Router} = require('express');
const router = Router();
const adicionalCtrl = require("../controller/adicional.controller");


router.get('/currentcampaignInfo', adicionalCtrl.getDatosCampaign);
router.get('/currentcampaignYear', adicionalCtrl.getLastYear);
router.get('/currentcampaignYearNumber', adicionalCtrl.getYearByNumber);

router.post('/currentcampaignToWinterPhase', adicionalCtrl.currentcampaignToWinterPhase);



module.exports = router;