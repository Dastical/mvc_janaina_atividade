class OrderModel {
    constructor() {
        this.orders = []
    }
    getAll() {
        return this.orders
    }
    create(clientId, vehicleId) {
        const order = {
            id: Date.now().toString(),
            clientId,
            vehicleId,
            date: new Date()
        }
        this.orders.push(order)
        return order
    }
}
module.exports = new OrderModel()