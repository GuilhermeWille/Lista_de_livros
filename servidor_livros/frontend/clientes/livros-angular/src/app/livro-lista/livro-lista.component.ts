
import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  standalone: false,
  templateUrl: './livro-lista.html',
  styleUrls: ['./livro-lista.css'],
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) { }

ngOnInit(): void {
  this.servLivros.obterLivros()
    .then(livros => {
      this.livros = livros;
  });
}

public obterNome = (codEditora: number): String => {
  return this.servEditora.getNomeEditora(codEditora);
}

public excluir (codigo: string): void{
  this.servLivros.excluir(codigo)
    .then(() => {
    this.servLivros.obterLivros()
      .then(livros => {
        this.livros = livros;
      });
    });
  }
}
