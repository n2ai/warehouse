const router = require("express").Router();
const {handleAdminLogin, handleAdminInventory} = require("../controllers/adminController")

router.get('/:id/:username',handleAdminLogin)
router.get('/:id/:username/api/inventory',handleAdminInventory)

module.exports = router
