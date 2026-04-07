const OrderModel = require("../models/OrderModel")
const ClientModel = require("../models/ClientModel")
const VehicleModel = require("../models/VehicleModel")
class OrderController {
    list(req, res) {
        const orders = OrderModel.getAll()
        const clients = ClientModel.getAll()
        const vehicles = VehicleModel.getAll()
        res.render("orders", { orders, clients, vehicles, error: null })
    }
    create(req, res) {
        const { clientId, vehicleId } = req.body
        const clients = ClientModel.getAll()
        const vehicles = VehicleModel.getAll()
        const vehicle = VehicleModel.findById(vehicleId)
        if (!vehicle) {
            return res.render("orders", {
                orders: OrderModel.getAll(),
                clients,
                vehicles,
                error: "Veículo não encontrado"
            })
        }
        if (!vehicle.available) {
            return res.render("orders", {
                orders: OrderModel.getAll(),
                clients,
                vehicles,
                error: "Veículo já foi vendido e não pode ser comprado novamente"
            })
        }
        OrderModel.create(clientId, vehicleId)
        VehicleModel.markAsUnavailable(vehicleId)
        res.redirect("/orders")
    }
}

module.exports = new OrderController()