const {Router} = require("express");
const LoanController = require("../controllers/LoanController");

//const checkUsersExists = require("../middlewares/checkUsersExists");
//const checkBooksExists = require("../middlewares/checkBooksExists");

const loanRoutes = Router();
const loanController = new LoanController();
//---------------------------------------------------------------------
loanRoutes.post("/loans/:user_id/:book_id", loanController.createLoans);
loanRoutes.get("/loans", loanController.listLoans);
loanRoutes.get("/loans/:loan_id", loanController.listLoansById);
loanRoutes.delete("/loans/:loan_id/:book_id", loanController.deleteLoans);
//---------------------------------------------------------------------
module.exports = loanRoutes