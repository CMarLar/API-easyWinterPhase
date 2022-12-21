const {Router} = require('express');
const router = Router();
const userCtrl = require("../controller/user.controller");



router.post('/register', userCtrl.postRegister); //ruta de registro
router.post('/login',userCtrl.postLogin);//ruta de login


module.exports = router;