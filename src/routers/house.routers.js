const {Router} = require('express');
const router = Router();
const houseCtrl = require("../controller/house.controller");

router.delete('/housesmanagement', houseCtrl.deleteHouse);

module.exports = router;