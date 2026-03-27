
# Banco API Tests

Este projeto tem como objetivo realizar a automação de testes para a API Rest do projeto [banco-api](https://github.com/juliodelimas/banco-api), utilizando JavaScript e diversas bibliotecas de testes para garantir o bom funcionamento da API.

## Objetivo

O objetivo principal deste projeto é validar os endpoints da API Rest do Banco, através de testes automatizados. O projeto faz uso das bibliotecas **Mocha**, **Supertest**, **Chai**, e outras para garantir que as funcionalidades da API estão funcionando conforme o esperado.

## Stack Utilizada

- **JavaScript**: Linguagem principal do projeto.
- **Mocha**: Framework de testes.
- **Supertest**: Biblioteca para fazer requisições HTTP.
- **Chai**: Biblioteca de asserções utilizada para validar os resultados dos testes.
- **Mochawesome**: Relatório em HTML sobre os testes realizados.
- **dotenv**: Para gerenciar variáveis de ambiente.

## Estrutura de Diretórios

A estrutura do diretório do projeto é organizada da seguinte forma:

```bash
/banco-api-tests
├── /node_modules          # Módulos e dependências instaladas
├── /test                  # Diretório onde os testes são armazenados
├── /reports               # Diretório para os relatórios gerados pelo mochawesome
├── package.json           # Arquivo com dependências e scripts do projeto
├── .env                   # Arquivo com variáveis de ambiente
└── README.md              # Este arquivo
```

## Dependências

O projeto depende das seguintes bibliotecas que podem ser instaladas a partir do arquivo `package.json`:

- **Mocha**: Framework de testes para JavaScript.
- **Supertest**: Para realizar requisições HTTP durante os testes.
- **Chai**: Biblioteca de asserções.
- **Mochawesome**: Relatório de testes em HTML.
- **dotenv**: Carregamento de variáveis de ambiente a partir do arquivo `.env`.

### Como Instalar as Dependências

1. Clone o repositório:

   ```bash
   git clone https://github.com/diverleo-br/banco-api-tests.git
   cd banco-api-tests
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

## Variáveis de Ambiente

É necessário criar um arquivo `.env` na raiz do projeto com a variável `BASE_URL` configurada com a URL base da API que será testada. Exemplo:

```bash
BASE_URL=http://api.dominio.com
```

## Rodando os Testes

1. Após configurar o arquivo `.env`, execute os testes com o seguinte comando:

   ```bash
   npm test
   ```

2. Os relatórios dos testes serão gerados no diretório `/reports` com o nome `mochawesome.html`.

## Links de Documentação

- [Mocha](https://mochajs.org/)
- [Supertest](https://github.com/visionmedia/supertest)
- [Chai](https://www.chaijs.com/)
- [Mochawesome](https://github.com/lukechilds/mochawesome)
- [dotenv](https://www.npmjs.com/package/dotenv)

