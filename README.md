<img src="https://ik.imagekit.io/mbrites/Captura_de_tela_de_2021-08-20_11-58-25_BxSGlCBKq.png?updatedAt=1629471794360">

# Sobre a aplicação

---

### 💻Projeto

Essa é uma aplicação de compra e venda de ações

---

### 🍃tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)
- [Docker](https://www.docker.com/)
- [Postgres](https://www.postgrescompare.com/)

---

## 🚀 Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `yarn dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3333`

A documentação estará disponível em `http://localhost:3333/api-docs`

---

# Usuário

## Criação

[X] Deve ser possível criar um usuário

[X] Não deve ser possível criar um usuário com o mesmo username

[X] Não deve ser possível criar um usuário com o mesmo email

[X] Deve ser possível fazer a autenticação do usuário

## Atualização

[X] Deve ser possível remover um usuário informando seu id

[X] Apenas usuários administradores devem poder remover um usuário

[X] O usuário deve poder comprar uma exchange

[X] O usuário deve poder vender a exchange

[X] Ao comprar ou vender uma exchange o saldo do usuário deve ser atualizado

[X] Não deve ser possível comprar uma exchange caso o usuário não tenha saldo suficiente

[X] Apenas usuários autenticados devem poder comprar ou vender uma exchange

---

# Empresa

## Criação

[X] Deve ser possível criar uma empresa

[X] Não deve ser possível criar uma empresa se o nome ja existe

[X] Apenas usuários autenticados devem poder criar empresas

## Atualização

[X] Deve ser possível atualizar o exchange_value

[X] Apenas usuários administradores devem poder atualizar o exchange_value

---

# Ações

## Criação

[X] Deve ser possível criar uma ação

[X] Apenas usuários administradores devem poder criar uma ação

## Atualização

[X] Quando uma ação for vendida ela deve ter o valor de owner atualizado para null e seu available para true

[X] Quando uma ação for comprada deve ter seu valor de owner atualizado para o nome do comprador e seu available para false

---

Feito por:  &nbsp;[mateus-brites](https://github.com/mateus-brites)