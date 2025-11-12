import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 

import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

@NgModule({
  declarations: [
    AppComponent,
    LivroListaComponent,
    LivroDadosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [
    ControleEditoraService,
    ControleLivrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }