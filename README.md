# Javascript Upload Project - File Upload App

Este projeto é uma aplicação para upload de arquivos e listagem local, desenvolvida em Node.js, pronta para rodar em ambiente local no Windows.

Repositório: [https://github.com/Arthur-Henriquee/file-upload-app](https://github.com/Arthur-Henriquee/file-upload-app)

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Git](https://git-scm.com/) - para clonar o repositório.
- [Node.js (LTS)](https://nodejs.org/) - versão LTS (Long Term Support).
- Um editor de código, como o [VS Code](https://code.visualstudio.com/).

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para criar o servidor web e gerenciar as rotas.
- **Multer**: Middleware para manipulação de arquivos multipart/form-data (upload de arquivos).
- **CSS**: Para estilização da aplicação.



## Como Rodar o Projeto Localmente no Windows

Siga os passos abaixo para configurar e rodar o projeto na sua máquina:

1. **Clone o Repositório**  

   Abra o terminal ou o Git Bash e execute:
   ```bash
   git clone https://github.com/Arthur-Henriquee/file-upload-app

2. **Acesse a pasta do projeto**:

   - No terminal, digite:
     ```bash
     cd caminho-da-pasta
     ``` 

 3. **Instale as dependências do projeto**:

   - Execute o comando:
     ```bash
     npm install
     ```

  4. **Inicie o servidor local**:

   - Execute o comando:
     ```bash
     npm start
     ``` 

  5. **Acesse a aplicação no navegador**:

   - Abra o navegador e digite:

     ``` 
     http://localhost:3000
     ```


     ## Problemas que podem enfrentar

- **Erro: Porta já em uso**
  Se a porta 3000 já estiver em uso, você pode iniciar o servidor em outra porta utilizando o seguinte comando:
  ```bash
  npm start -- --port 3001

## Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.



