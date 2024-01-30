const router = require("express").Router();
const {handleAdminLogin} = require("../controllers/adminController")

router.get('/:id/:username',handleAdminLogin)
module.exports = router
