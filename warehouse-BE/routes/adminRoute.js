const router = require("express").Router();
const {handleAdminLogin, handleAdminInventory, handleUpdateInventory, handleCreateInventory, handleDeleteInventory} = require("../controllers/adminController")

router.get('/:id/:username',handleAdminLogin)
router.get('/:id/:username/api/inventory',handleAdminInventory)
router.put('/:id/:username/api/inventory',handleUpdateInventory)
router.post('/:id/:username/api/inventory',handleCreateInventory)
router.delete('/:id/:username/api/inventory',handleDeleteInventory)
module.exports = router
