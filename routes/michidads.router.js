const express = require("express")
const router = express.Router()
const michidadsController = require("../controllers/michidads.controller")

router.post("/", michidadsController.create)

router.get("/", michidadsController.find)
router.get("/:id", michidadsController.findOne)
router.put("/:id", michidadsController.update)
router.delete("/:id", michidadsController.remove)

module.exports = router