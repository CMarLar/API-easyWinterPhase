const {Router} = require('express');
const router = Router();
const yearCtrl = require("../controller/year.controller");



router.post('/housesmanagementYear', yearCtrl.postYear);
router.post('/housesmanagementPlayerYear', yearCtrl.postPlayerYear);

router.put('/currentCampaignYear', yearCtrl.putYear);


module.exports = router;