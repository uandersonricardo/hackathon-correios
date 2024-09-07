# Hackathon Correios

Repositório da solução desenvolvida para o Hackathon Correios na Campus Party Nordeste 2024.

## Visão Geral

Este monorepo foi desenvolvido durante o **Hackathon Correios** e reúne os principais componentes do projeto em uma única estrutura. O projeto é dividido em **três principais repositórios**: o **frontend**, o **backend**, e o **rag-ingest**, que trabalham juntos para criar uma solução completa de Recuperação de Informação com Geração de Respostas (RAG - Retrieval-Augmented Generation).

## Componentes

### 1. Frontend

Localizado na pasta `frontend/`, este componente é responsável pela interface de usuário, construída com **Vue.js** e **TypeScript**. Ele permite a interação com os dados e funcionalidades fornecidas pelo backend.

Para mais detalhes, consulte o [README do frontend](./frontend/README.md).

### 2. Backend

Localizado na pasta `backend/`, o backend é uma API RESTful construída com **Node.js** e **Express**, que segue princípios de Orientação a Objetos (OO). Ele gerencia a lógica de negócio e a comunicação com serviços externos, como o **ChatGPT** e o banco de dados vetorial **Qdrant**.

Para mais detalhes, consulte o [README do backend](./backend/README.md).

### 3. RAG-Ingest

Localizado na pasta `rag-ingest/`, este componente é responsável pela extração e ingestão de dados. Utiliza o **pymupdf4llm** para extrair textos e imagens de PDFs, e posteriormente transforma esses dados em embeddings utilizando a API da OpenAI, armazenando-os no banco de dados vetorial.

Para mais detalhes, consulte o [README do rag-ingest](./rag-ingest/README.md).

## Pré-requisitos

- Node.js (versão 18.x ou superior)
- Python 3.8 ou superior (para o `rag-ingest`)