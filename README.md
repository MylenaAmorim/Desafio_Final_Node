# :blue_car: Compassolisa 
Projeto final do programa de bolsas da Compass. Compassolisa é um seguimento carros para alugar de luxo e semi luxo.

## :computer: Desenvolvimento

API desenvolvido em Node.js, usando o web framework ExpressJS e o banco de dados não-relacional MongoDB utilizando o ODM mongoose. 
A aplicação é capaz de cadastrar novos, alterar, listar(com paginação) e deletar carros e pessoas, e fazer autenticação de usuário usando jsonwebtoken.

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

### :oncoming_automobile: Rotas de Carros:

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

GET http://localhost:3000/api/v1/peaple

GET http://localhost:3000/api/v1/peaple/:id

DELETE http://localhost:3000/api/v1/peaple/:id

PUT http://localhost:3000/api/v1/peaple/:id



