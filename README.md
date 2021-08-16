# Usuário

## Criação

[X] Deve ser possível criar um usuário

[X] Não deve ser possível criar um usuário com o mesmo username

[X] Não deve ser possível criar um usuário com o mesmo email

[ ] Deve ser possível fazer a autenticação do usuário

## Atualização

[ ] Deve ser possível remover um usuário informando seu id

[ ] Apenas usuários administradores devem poder remover um usuário

[ ] O usuário deve poder compara uma exchange

[ ] O usuário deve poder vender a exchange

[ ] Ao comprar ou vender uma exchange o saldo do usuário deve ser atualizado

[ ] Não deve ser possível comprar uma exchange caso o usuário não tenha saldo suficiente

[ ] Apenas usuários autenticados devem poder comprar ou vender uma exchange

---

# Empresa

## Criação

[X] Deve ser possível criar uma empresa

[X] Não deve ser possível criar uma empresa se o nome ja existe

[ ] Apenas usuários autenticados devem poder criar empresas

## Atualização

[ ] Deve ser possível atualizar o exchange_value

[ ] Apenas usuários administradores devem poder atualizar o exchange_value

---

# Ações

## Criação

[X] Deve ser possível criar uma ação

[ ] Apenas usuários administradores devem poder criar uma ação

## Atualização

[ ] Quando uma ação for vendida ela deve ter o valor de owner atualizado para null e seu available para true

[ ] Quando uma ação for comprada deve ter seu valor de owner atualizado para o nome do comprador e seu available para false

---