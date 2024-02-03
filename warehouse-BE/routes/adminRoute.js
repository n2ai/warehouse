const router = require("express").Router();
const {handleAdminLogin, handleAdminInventory, handleUpdateInventory} = require("../controllers/adminController")

router.get('/:id/:username',handleAdminLogin)
router.get('/:id/:username/api/inventory',handleAdminInventory)
router.post('/:id/:username/api/inventory',handleUpdateInventory)
module.exports = router
