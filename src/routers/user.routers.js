const {Router} = require('express');
const router = Router();
const userCtrl = require("../controller/user.controller");



router.post('/register', userCtrl.postRegister); //ruta de registro


module.exports = router;