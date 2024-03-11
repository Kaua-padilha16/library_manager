const {Router} = require("express");
const bookRoutes = require("./book.routes");
const userRoutes = require("./user.routes");
const loanRoutes = require("./loan.routes");

const routes = Router()

routes.use("/", bookRoutes)
routes.use("/", userRoutes)
routes.use("/", loanRoutes)

module.exports = routes