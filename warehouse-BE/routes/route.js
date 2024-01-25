const router = require("express").Router();
const {handleLogin,handleRegister} = require("../controllers/apiController")

router.post('/login',handleLogin)
router.post('/register',handleRegister)
module.exports = router
