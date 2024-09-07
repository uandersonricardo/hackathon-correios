# Backend - Hackathon Correios

## Visão Geral

Este repositório foi desenvolvido durante o **Hackathon Correios** e implementa o backend do projeto. O backend é construído utilizando **Node.js** e **Express**, seguindo uma arquitetura RESTful e princípios de Orientação a Objetos (OO). 

Este backend é responsável por gerenciar a lógica de negócio, realizar a comunicação com serviços externos, como a **LLM da OpenAI (ChatGPT)** e o **banco de dados vetorial (VectorDB) Qdrant**, além de fornecer uma API robusta e escalável para ser consumida pelo frontend e outros clientes.

## Pré-requisitos

- Node.js (versão 18.x ou superior)

Para instalar as dependências do projeto, execute:

```bash
yarn
```

## Uso

### 1. Configuração

Antes de iniciar o servidor, configure as variáveis de ambiente no arquivo `.env`.

### 2. Desenvolvimento
Para rodar o servidor em modo de desenvolvimento com hot-reload, utilize:

```bash
yarn dev
```

O servidor estará disponível em `http://localhost:3333/`.

### 3. Build para Produção
Para criar uma versão otimizada do servidor para produção, utilize o comando:

```bash
yarn build
```

E, em seguida, para iniciar o servidor em modo de produção:

```bash
yarn start
```
