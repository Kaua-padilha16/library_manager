const {Router} = require("express");
const LoanController = require("../controllers/LoanController");

const checkUsersExists = require("../middlewares/checkUsersExists");
const checkBooksExists = require("../middlewares/checkBooksExists");

const loanRoutes = Router();
const loanController = new LoanController();
//---------------------------------------------------------------------
loanRoutes.post("/loans/:user_id/:book_id", loanController.loans);
loanRoutes.get("/loans", loanController.listLoans),
//---------------------------------------------------------------------
module.exports = loanRoutes