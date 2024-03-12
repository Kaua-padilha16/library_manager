//importando arquivo de conexão com o banco de dados 
const knex = require("../database/knex");
//nome da classe
class LoanController {

//criar emprestimos    
async createLoans(req, res) {
    const {user_id} = req.params;
    const {book_id} = req.params;

    await knex ("loans").insert({user_id, book_id})
    await knex ("books").where({id: book_id}).update({available: false})
    return res.status(200).json("Livro emprestado com sucesso!!");
    
}
// listar emprestimos
async listLoans(req, res) {
    const loans = await knex("loans");
        return res.status(200).json(loans)
}
//listar emprestimos pelo id
async listLoansById(req, res) {
    const {loan_id} = req.params
    const [loan] = await knex("loans").where({id: loan_id})

    return res.status(200).json(loan)
}
//Devolvendo o livro e deletando o emprestimo
async deleteLoans(req, res) {
    const {loan_id} = req.params
    const {book_id} = req.params

    await knex("loans").where({id: loan_id}).delete();
    await knex("books").where({id: book_id}).update({available: true});
    return res.status(200).json("Emprestimo deletado com sucesso! O livro também foi devolvido! Obrigado!!");
}
}
module.exports = LoanController