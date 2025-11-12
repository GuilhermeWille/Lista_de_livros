import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editora: Array<Editora> = [
    {
      codEditora: 0,
      nome: "Jambo editora"
    },
    {
      codEditora: 1,
      nome: "New Order"
    },
    {
      codEditora: 2,
      nome: "Retropunk Publicações"
    }
  ]

  public getEditoras(): Array<Editora>{
    return this.editora
  }

  public getNomeEditora(codEditora: number): String {
    const editoraEncontrada = this.editora.find(e => e.codEditora === codEditora);
    return editoraEncontrada ? editoraEncontrada.nome : " ";
  }
}
