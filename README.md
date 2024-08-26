# CRUD API PURE NODEJS

<img width="280" src="https://samory.sistemasresponsivos.com.br/wp-content/uploads/2022/04/1200px-Node.js_logo.svg_.png" />

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Stack Utilizada](#stack-utilizada)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)

## Sobre o Projeto

O projeto é basicamente uma API construída em Node.js que implementa um CRUD utilizando exclusivamente as funcionalidades nativas do próprio Node.js, sem a instalação de bibliotecas externas. O projeto inclui alguns testes unitários e um banco de dados em memória, que pode ser facilmente adaptado para outro banco de dados, caso necessário.

## Stack Utilizada

**Back-end:** 
- [Node.js](https://nodejs.org/)

## Funcionalidades

- Criar usuários
- Listar usuários (filtros opcionais)
- Atualizar usuários
- Deletar usuários


## Documentação da API

#### Validação dos campos
 - **Name**
   - Não pode conter números.
   - Não podem ser utilizados caracteres especiais.

- **Email**
   - Não pode conter um formato inválido.

- **Password**
   - Deve conter pelo menos uma letra maiúscula.
   - Deve conter pelo menos uma letra minúscula.
   - Deve conter pelo menos um número.
   - Deve conter pelo menos um caractere especial.
   - Deve ter no mínimo 8 caracteres.

#

#### Criação de usuário

```http
  POST /users
```

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | Nome do usuário (**Obrigatório**)|
| `email` | `string` | E-mail do usuário (**Obrigatório**)|
| `password` | `string` | Senha do usuário (**Obrigatório**)|


#### Listagem de usuários
```http
  GET /users
```

| Query Params   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | ID do usuário (**Opcional**)|
| `name` | `string` | Nome do usuário (**Opcional**)|
| `email` | `string` | E-mail do usuário (**Opcional**)|

**Informação**: Caso nenhum parâmetro de consulta seja fornecido, será retornada uma lista com todos os usuários.

#### Atualização de usuário
```http
  PUT /users/${id}
```
| Params   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | ID do usuário (**Obrigatório**)|


| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | Nome do usuário (**Opcional**)|
| `email` | `string` | E-mail do usuário (**Opcional**)|
| `password` | `string` | Senha do usuário (**Opcional**)|

**Informação**: As informações enviadas no corpo da requisição devem incluir pelo menos um dado; caso contrário, será retornado um erro.

#### Listagem de usuários
```http
  DELETE /users/${id}
```

| Params   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | ID do usuário (**Obrigatório**)|



## Pré-requisitos

Para começar a trabalhar no projeto, certifique-se de ter os seguintes pré-requisitos instalados em sua máquina:

- **Node.js:** O projeto depende do Node.js para execução de scripts. Se você não tiver o Node.js instalado, poderá baixá-lo em [https://nodejs.org/](https://nodejs.org/).

## Instalação

Siga estas etapas para colocar o projeto em funcionamento:

1. Clone o repositório
```sh
git clone https://github.com/CarlosDanielss/crud-api-pure-nodejs.git
```
2. Navegue até o diretório do projeto
```sh
cd crud-api-pure-node
```
3. Instale dependências
```sh
npm install
```
4. Execute os testes
```sh
npm run test
```
5. Inicie o servidor de desenvolvimento
```sh
npm run dev
```
