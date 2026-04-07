class deleteModelVehicle {
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
    deleteById(id) {
        const index = this.vehicles.findIndex(v => v.id === id)
        if (index !== -1) {
            this.vehicles.splice(index, 1)
            return true
        }
        return false
    }
}
module.exports = new deleteModelVehicle()