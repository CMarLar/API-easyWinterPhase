const {Router} = require('express');
const router = Router();
const userCtrl = require("../controller/user.controller");



router.post('/register', userCtrl.postUser);




// router.post('/login', userCtrl.login);

// router.get('/libros',userCtrl.getBooks);
// router.get('/libro',userCtrl.getOneBook);//cambio de endpoint de libros a libro O NO FUNCIONA
// router.post('/libros',userCtrl.addNewBook);
// router.put('/libros',userCtrl.modifyBooks);
// router.delete('/libros',userCtrl.deleteBook);


module.exports = router;