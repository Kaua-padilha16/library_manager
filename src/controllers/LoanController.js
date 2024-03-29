//importando arquivo de conexão com o banco de dados 
const knex = require("../database/knex");
//nome da classe
class LoanController {

//criar emprestimos    
async createLoans(req, res) {
    const {user_id} = req.params;
    const {book_id} = req.params;

    const book = await knex("books").where({id: book_id}).first();
    const user = await knex("users").where({id: user_id}).first();
//verificar se livro ou usuario existe
    if(!book) {
        return res.status(400).json("Livro não encontrado!")
    };
    if(!user) {
        return res.status(400).json("Usuário não encontrado!")
    };
//realizar o emprestimo
    await knex ("loans").insert({user_id, book_id});
    await knex ("books").where({id: book_id}).update({available: false});
    return res.status(200).json("Livro emprestado com sucesso!!");
}


// listar emprestimos
async listLoans(req, res) {
    const {user_id} = req.params

    const loans = await knex("loans")
    .where({user_id})
    .innerJoin('books', 'books.id', 'loans.book_id')
    .select('books.title', 'books.author', 'books.numPag', 'books.category')

        return res.status(200).json(loans)
}


//contar o total de livros emprestados
async totalLoans(req, res) {
    const {user_id} = req.params;

    const [total] = await knex('loans').where({user_id}).count({books: 'book_id'});

    return res.status(200).json(total);
}

//Devolvendo o livro
async returnLoans(req, res) {

    const {user_id} = req.params;
    const {book_id} = req.params;

    const user = await knex("users").where({id: user_id}).first();
    const book = await knex("books").where({id: book_id}).first();
//verificar se livro ou usuario existe
    if(!book) {
        return res.status(400).json("Livro não encontrado!")
    };
    if(!user) {
        return res.status(400).json("Usuário não encontrado!")
    };

//devolvendo o livro
    const [loan] = await knex("loans").where({user_id});
console.log(loan);
    const bookId = loan.book_id
console.log(bookId);
    if(bookId == book_id) {

    await knex("books").where({id: book_id}).update({available: true});

    return res.status(200).json("Livro devolvido com sucesso!")
    }
    return res.status(400).json("Operação não realizada!");
  }
}
module.exports = LoanController