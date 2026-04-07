const express = require("express")
const path = require("path")
const routes = require("./routes/routes")

const app = express()

app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use("/", routes)

app.listen(3000, () => {

    console.log("Servidor rodando em http://localhost:3000")
})