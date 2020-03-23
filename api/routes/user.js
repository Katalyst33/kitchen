const router = require('express-promise-router')();

const userController = require('../controller/user');


router.route('/signup')
    .post(userController.userSignup);


router.route('/login')
    .post(userController.userLogin);

router.route('/:code')
    .delete(userController.deleteUser);


module.exports = router;

