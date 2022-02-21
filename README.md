# :blue_car: Compassolisa 
Projeto final do programa de bolsas da Compass. Compassolisa é um seguimento carros para alugar de luxo e semi luxo.

## :computer: Desenvolvimento

API desenvolvido em Node.js, usando o web framework ExpressJS e o banco de dados não-relacional MongoDB utilizando o ODM mongoose. 
A aplicação é capaz de cadastrar novos, alterar, listar(com paginação) e deletar carros, locadoras e pessoas, e fazer autenticação de usuário usando jsonwebtoken.

### Instruções necessárias para rodar a aplicação
- Baixar e instalar o Node.js (https://nodejs.org/en/download/current/);

- Clonar o repositório:

  ```
  git clone https://github.com/MylenaAmorim/Desafio_Final_Node.git
  ```

- Entrar na pasta Projeto-Final;

- No terminal de linha de comando e, dentro da pasta do projeto, digitar:

  ```npm i``` para instalar todas as dependências no node_modulos

  ```npm run dev``` para rodar o servidor na porta 3000 no ambiente de desenvolvimento

##### * Obs: não é necessário criar a coleção ou banco de dados antes de rodar o post, pois o mongoose cria a coleção e o banco ao inserir dados através da rota POST caso o banco e a coleção não exista.

## :railway_track: Rotas

### :page_facing_up: Rota da documentação:

GET http://localhost:3000/api-docs

### :pouting_face: Rota de Autenticação:

POST http://localhost:3000/api/v1/authenticate
```
{
    "email": "joazinho@email.com",
    "senha": "123456"
}
```

### :oncoming_automobile: Rotas de Carros:
#### * Obs: para acessar as rotas é necessário fazer o login antes.

POST http://localhost:3000/api/v1/car
```
{
"modelo": "GM S10 2.8",
"cor": "branco",
"ano": "2021",
"acessorios": [
{ "descricao": "Ar-condicionado" },
{ "descricao": "Dir. Hidráulica" },
{ "descricao": "Cabine Dupla" },
{ "descricao": "Tração 4x4" },
{ "descricao": "4 portas" },
{ "descricao": "Diesel" },
{ "descricao": "Air bag" },
{ "descricao": "ABS" }
],
"quantidadePassageiros": 5
}
```

GET http://localhost:3000/api/v1/car

GET http://localhost:3000/api/v1/car/:id

DELETE http://localhost:3000/api/v1/car/:id

PUT http://localhost:3000/api/v1/car/:id
```
{
"modelo": "GM S11 2.8",
"cor": "preto",
"ano": "2021",
"acessorios": [
{ "descricao": "Ar-condicionado" },
{ "descricao": "Dir. Hidráulica" },
{ "descricao": "Cabine Dupla" },
{ "descricao": "Tração 4x4" },
{ "descricao": "4 portas" },
{ "descricao": "Diesel" },
{ "descricao": "Air bag" },
{ "descricao": "ABS" }
],
"quantidadePassageiros": 5
}
```

### :pouting_face: Rotas de Pessoas:

POST http://localhost:3000/api/v1/peaple
```{
"nome": "Luciano Silva",
"cpf": "131.147.860-49",
"data_nascimento": "03/03/2021",
"email": "joazinho@email.com",
"senha": "123456",
"habilitado": "sim"
}
```

GET http://localhost:3000/api/v1/peaple

GET http://localhost:3000/api/v1/peaple/:id

DELETE http://localhost:3000/api/v1/peaple/:id

PUT http://localhost:3000/api/v1/peaple/:id
```{
"nome": "Luciano Silva de Pereira",
"cpf": "131.147.860-49",
"data_nascimento": "03/03/2021",
"email": "joazinho@email.com",
"senha": "123456",
"habilitado": "sim"
}
```
### :oncoming_automobile: Rotas de Locadoras:

POST http://localhost:3000/api/v1/rental
```
{
"nome": "Localiza Rent a Car",
"cnpj": "16.670.085/0001-55",
"atividades": "Aluguel de Carros E Gestão de Frotas",
"endereco": [
      {
      "cep": "96200-200",
      "number":"1234",
      "isFilial": false
      }
  ]
}
```

GET http://localhost:3000/api/v1/rental

GET http://localhost:3000/api/v1/rental/:id

DELETE http://localhost:3000/api/v1/renatl/:id

PUT http://localhost:3000/api/v1/rental/:id
```
{
"nome": "Rent a Car",
"cnpj": "16.670.085/0001-55",
"atividades": "Aluguel de Carros E Gestão de Frotas",
"endereco": [
      {
      "cep": "96200-200",
      "number":"1234",
      "isFilial": false
      }
  ]
}
```

