import { Injectable } from '@angular/core';
import { Livro } from './livro';


interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

const baseURL = "http://localhost:3030/livros";

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {


  constructor() { }

  async obterLivros(): Promise<Livro[]> {
    const response = await fetch(baseURL, { method: 'GET' });
    const livrosMongo: LivroMongo[] = await response.json();
    

    return livrosMongo.map(livroMongo => {
      return new Livro(
        livroMongo._id || '', 
        livroMongo.codEditora,
        livroMongo.titulo,
        livroMongo.resumo,
        livroMongo.autores
      );
    });
  }

 
  async incluir(livro: Livro): Promise<boolean> {
   
    const livroMongo: Omit<LivroMongo, '_id'> = {
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };

    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(livroMongo)
    });
    
    return response.ok; 
  }

  async excluir(codigo: string): Promise<boolean> {
    const url = `${baseURL}/${codigo}`;
    const response = await fetch(url, { method: 'DELETE' });
    
    return response.ok; 
  }
}