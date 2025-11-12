var banco = require('mongoose');

banco.connect('mongodb://127.0.0.1:27017/livraria');
module.exports = banco;