class VehicleModel {
    constructor() {
        this.vehicles = []
    }
    getAll() {
        return this.vehicles
    }
    create(brand, model, year) {
        const vehicle = {
            id: Date.now().toString(),
            brand,
            model,
            year,
            available: true
        }
        this.vehicles.push(vehicle)
        return vehicle
    }
    findById(id) {
        return this.vehicles.find(v => v.id === id)
    }
    update(id, brand, model, year) {
        const vehicle = this.findById(id)
        if (!vehicle) {
            return null
        }
        vehicle.brand = brand
        vehicle.model = model
        vehicle.year = year
        return vehicle
    }
    deleteById(id) {
        const index = this.vehicles.findIndex(v => v.id === id)
        if (index === -1) {
            return false
        }
        this.vehicles.splice(index, 1)
        return true
    }
    markAsUnavailable(id) {
        const vehicle = this.findById(id)
        if (!vehicle) {
            return null
        }
        vehicle.available = false
        return vehicle
    }
}
module.exports = new VehicleModel()

