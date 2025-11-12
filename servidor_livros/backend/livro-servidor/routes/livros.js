const { obterLivros, incluir, excluir } = require('../model/livro-dao')

var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
    try{
        const Livros = await obterLivros();
        res.json(Livros);
    }catch(erro){
        res.status(500).json({ mensagem: 'Erro ao obter livros', erro: erro.message });
    }
});

router.post('/', async (req, res) => {
    try{
        const livro = req.body;
        await incluir(livro);
        res.json({ mensagem: 'Livro incluido com sucesso'});
    }catch(erro){
        res.status(500).json({ mensagem: 'Falha ao incluir livro', erro: erro.message});
    }
});

router.delete('/:codigo', async (req, res) => {
  try {
    const codigo = req.params.codigo; 
    await excluir(codigo);
    res.json({ mensagem: 'Livro excluído com sucesso' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Falha ao excluir livro', erro: erro.message });
  }
});

module.exports = router;