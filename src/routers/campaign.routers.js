const {Router} = require('express');
const router = Router();
const campaignCtrl = require("../controller/campaign.controller");

router.get('/campaigns', campaignCtrl.getCampaigns);
router.delete('/campaigns', campaignCtrl.deleteCampaign);
router.post('/campaigns', campaignCtrl.postCampaign)
router.put('/campaigns', campaignCtrl.putCampaign)

module.exports = router;