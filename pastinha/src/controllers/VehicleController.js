const VehicleModel = require("../models/VehicleModel")
class VehicleController {
    list(req, res) {
        const vehicles = VehicleModel.getAll()
        res.render("vehicles", { vehicles })
    }
    create(req, res) {
        const { brand, model, year } = req.body
        VehicleModel.create(brand, model, year)
        res.redirect("/vehicles")
    }
    edit(req, res) {
        const { id } = req.params
        const vehicle = VehicleModel.findById(id)
        if (!vehicle) {
            return res.redirect("/vehicles")
        }
        res.render("vehicle_edit", { vehicle })
    }
    update(req, res) {
        const { id } = req.params
        const { brand, model, year } = req.body
        const updated = VehicleModel.update(id, brand, model, year)
        if (!updated) {
            return res.redirect("/vehicles")
        }
        res.redirect("/vehicles")
    }
    deleteVehicle(req, res) {
        const { id } = req.params
        const deleted = VehicleModel.deleteById(id)
        if (deleted) {
            return res.redirect("/vehicles")
        }
        res.status(404).send("Veículo não encontrado")
    }
}
module.exports = new VehicleController()