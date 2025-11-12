import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-livro-dados',
  standalone: false,
  templateUrl: './livro-dados.html',
  styleUrls: ['./livro-dados.css']
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro;
  public autoresForm: string = ''; 
  public editoras: Array<Editora> = [];
  public editoraForm: any;

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router 
  ) { 
    this.livro = new Livro('', 0, '', '', []); 
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.editoraForm = new FormControl(this.livro.codEditora);
  }

  public incluir(): void {
  this.livro.codEditora = this.editoraForm.value;

  this.servLivros.incluir(this.livro)
    this.servLivros.incluir(this.livro)
      .then(() => {
        this.router.navigateByUrl("/lista");
      });
}
}
