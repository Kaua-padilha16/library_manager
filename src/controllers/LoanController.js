//importando arquivo de conexão com o banco de dados 
const knex = require("../database/knex");
//nome da classe
class LoanController {
async loans(req, res) {
    const {user_id} = req.params;
    const {book_id} = req.params;

    await knex ("loans").insert({user_id, book_id})
    return res.status(200).json("+-+");
}

async listLoans(req, res) {
    const loans = await knex("loans");
        return res.status(200).json(loans)
}

}
module.exports = LoanController