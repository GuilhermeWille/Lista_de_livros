var banco = require('./conexao');

var livroSchema = new banco.Schema({
    codEditora: Number,
    titulo: String,
    resumo: String,
    autores: [String]
});

const Livro = banco.model('Livro', livroSchema)
module.exports = Livro;