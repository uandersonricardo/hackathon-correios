# RAG Ingest - Hackathon Correios

## Visão Geral

Este repositório foi desenvolvido durante o **Hackathon Correios** e tem como objetivo fornecer uma solução simples e eficiente para extração e ingestão de dados em um fluxo de Recuperação de Informação com Geração de Respostas (RAG - Retrieval-Augmented Generation). O projeto é construído em Python e é composto por dois arquivos principais: `extract.py` e `ingest.py`.

O fluxo de trabalho do repositório consiste em:

1. **Extração de dados de PDFs:** Utilizando a biblioteca `pymupdf4llm`, extraímos o conteúdo (texto e imagens) de arquivos PDF e os salvamos em formato Markdown.
2. **Ingestão de dados:** Os arquivos extraídos são processados em chunks, transformados em embeddings utilizando o serviço da OpenAI, e armazenados em um banco de dados vetorial para uso posterior em consultas e geração de respostas.

## Estrutura do Projeto

O repositório possui a seguinte estrutura:

```
rag-ingest/
│
├── extract.py        # Script para extrair texto e imagens de PDFs e salvar em formato Markdown
├── ingest.py         # Script para processar arquivos, gerar embeddings e salvar em um banco de dados vetorial
├── README.md         # Documentação do projeto
└── requirements.txt  # Dependências necessárias para execução do projeto
```

## Pré-requisitos

- Python 3.8 ou superior
- Dependências listadas em requirements.txt

Para instalar as dependências, execute:

```bash
pip install -r requirements.txt
```

## Uso

### 1. Extração de Dados

O script `extract.py` utiliza a biblioteca `pymupdf4llm` para processar arquivos PDF e extrair seu conteúdo em formato Markdown. Para usá-lo, basta executar:

```bash
python extract.py
```

Isso gerará arquivos `.md` contendo o texto e as imagens extraídas dos PDFs da pasta `raw/`.

### 2. Ingestão de Dados

Após a extração, o script `ingest.py` processa os arquivos Markdown gerados, dividindo-os em chunks menores, e utiliza a API de embeddings da OpenAI para gerar vetores representativos desses chunks. Os vetores são então armazenados em um banco de dados vetorial para consultas futuras.

Para realizar a ingestão, execute:

```bash
python ingest.py
```

Esse comando irá gerar os vetores e armazená-los no banco de dados vetorial configurado.
