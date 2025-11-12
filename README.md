# 📚 Projeto Catálogo de Livros (Full-Stack)

Este é um projeto acadêmico full-stack que implementa um sistema de gerenciamento para um catálogo de livros.

O projeto é dividido em duas partes principais:
1.  **`livro-servidor` (Backend):** Uma API RESTful construída com Node.js, Express e Mongoose para gerenciar os dados dos livros em um banco MongoDB.
2.  **`livros-angular` (Frontend):** Uma aplicação de página única (SPA) construída em Angular que consome a API do backend para listar, incluir e excluir livros.

---

## ✨ Funcionalidades

* **Listar Livros:** Visualiza todos os livros cadastrados no banco de dados.
* **Adicionar Livros:** Adiciona um novo livro ao catálogo através de um formulário.
* **Excluir Livros:** Remove um livro do catálogo.
* **Integração de Editoras:** Relaciona os livros com uma lista pré-definida de editoras.

---

## 🛠️ Tecnologias Utilizadas

### Backend (`livro-servidor`)
* **Node.js:** Ambiente de execução do servidor.
* **Express:** Framework para criação das rotas da API.
* **Mongoose:** Biblioteca para modelagem de dados (ODM) do MongoDB.
* **CORS:** Habilita o compartilhamento de recursos entre o frontend e o backend.

### Frontend (`livros-angular`)
* **Angular:** Framework principal para a construção da interface do usuário.
* **TypeScript:** Superset do JavaScript utilizado pelo Angular.
* **Fetch API:** Utilizada nos serviços para consumir a API RESTful.
* **Bootstrap:** (Se você usou) Para estilização rápida dos componentes.

### Banco de Dados
* **MongoDB:** Banco de dados NoSQL utilizado para armazenar a coleção de `livros`.
* **MongoDB Compass:** Ferramenta visual para gerenciamento do banco.

---

## 🚦 Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
* [Node.js (v18+ e npm)](https://nodejs.org/)
* [Angular CLI](https://angular.io/cli) (instalado globalmente: `npm install -g @angular/cli`)
* [MongoDB](https://www.mongodb.com/try/download/community) (servidor)
* (Opcional, mas recomendado) [Postman](https://www.postman.com/downloads/) para testar a API.
* (Opcional, mas recomendado) [MongoDB Compass](https://www.mongodb.com/try/download/compass) para visualizar o banco.

---

## 🚀 Como Executar o Projeto

Siga estes passos para rodar a aplicação completa localmente.

### 1. Backend (`livro-servidor`)

Primeiro, vamos iniciar o servidor da API.

1.  **Navegue até a pasta do backend:**
    ```bash
    cd backend/livro-servidor
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o Banco de Dados:**
    **Importante:** Certifique-se de que o seu serviço do MongoDB (mongod) está em execução na sua máquina.

4.  **Inicie o servidor:**
    ```bash
    npm start
    ```

> O servidor backend estará em execução em `http://localhost:3030`.

### 2. Frontend (`livros-angular`)

Em um **novo terminal**, vamos iniciar a aplicação Angular.

1.  **Navegue até a pasta do frontend:**
    ```bash
    cd frontend/livros-angular
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie a aplicação:**
    ```bash
    ng serve
    ```

4.  **Acesse a aplicação:**
    Abra seu navegador e acesse `http://localhost:4200`. A aplicação já estará conectada ao seu backend.

---

## 📋 Endpoints da API (Backend)

O servidor (`http://localhost:3030`) expõe as seguintes rotas:

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **GET** | `/livros` | Retorna um array com todos os livros no banco. |
| **POST** | `/livros` | Adiciona um novo livro ao banco. Requer um JSON no body. |
| **DELETE** | `/livros/:codigo` | Exclui um livro específico usando o `_id` do MongoDB. |

**Exemplo de body para o `POST /livros`:**
```json
{
  "codEditora": 1,
  "titulo": "Meu Livro de Teste",
  "resumo": "Um resumo sobre como a API funciona.",
  "autores": ["Autor 1", "Autor 2"]
}
