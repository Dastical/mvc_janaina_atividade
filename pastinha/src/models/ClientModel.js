class ClientModel {
    constructor() {
        this.clients = []
    }
    getAll() {
        return this.clients
    }
    create(name, email) {
        const client = {
            id: Date.now().toString(),
            name,
            email
        }
        this.clients.push(client)
        return client
    }
}
module.exports = new ClientModel()