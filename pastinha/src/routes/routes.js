const express = require("express")
const ClientController = require("../controllers/ClientController")
const VehicleController = require("../controllers/VehicleController")
const OrderController = require("../controllers/OrderController")
const router = express.Router()

router.get("/clients", ClientController.list)
router.post("/clients", ClientController.create)
router.get("/vehicles", VehicleController.list)
router.post("/vehicles", VehicleController.create)
router.post("/vehicles/delete/:id", VehicleController.deleteVehicle)
router.get("/vehicles/edit/:id", VehicleController.edit)
router.post("/vehicles/update/:id", VehicleController.update)
router.get("/orders", OrderController.list)
router.post("/orders", OrderController.create)
router.get("/", (req, res) => {
    res.render("home")
})
module.exports = router