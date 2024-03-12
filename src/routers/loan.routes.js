const {Router} = require("express");
const LoanController = require("../controllers/LoanController");

const loanRoutes = Router();
const loanController = new LoanController();
//-------------------------------------------------------------------------------//
loanRoutes.post("/:user_id/:book_id", loanController.createLoans);
loanRoutes.get("/:user_id", loanController.listLoans);
loanRoutes.get("/total/:user_id", loanController.totalLoans);
loanRoutes.patch("/devolucao/:user_id/:book_id", loanController.returnLoans);
//-------------------------------------------------------------------------------//
module.exports = loanRoutes