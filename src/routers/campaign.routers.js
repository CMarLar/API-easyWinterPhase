const {Router} = require('express');
const router = Router();
const campaignCtrl = require("../controller/campaign.controller");

router.get('/campaigns', campaignCtrl.getCampaigns);
router.delete('/campaigns', campaignCtrl.deleteCampaign);

module.exports = router;