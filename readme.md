# 🎙️ Podcast Manager

Um aplicativo inspirado no estilo da Netflix para centralizar episódios de podcasts em vídeo, organizados por categorias.

## 📌 Descrição

O **Podcast Manager** é uma API REST desenvolvida em Node.js + TypeScript que permite listar e filtrar episódios de podcasts em vídeo.

A proposta é oferecer uma experiência simples para consumir conteúdos separados por categorias como:

- 💪 Fitness
- 🏋️ Bodybuilder
- ❤️ Saúde
- 😂 Humor
- ⚽ Esporte
- 🏃 Corrida

---

# 🚀 Funcionalidades

## ✅ Listar episódios

Retorna todos os episódios cadastrados.

## ✅ Filtrar episódios por podcast

Permite buscar episódios pelo nome do podcast através de query params.

---

# 🛠️ Tecnologias utilizadas

- Node.js
- TypeScript
- HTTP Native Module
- REST API

---

# 📂 Estrutura do Projeto

```bash
src/
│
├── controllers/
│   └── podcasts-controller.ts
│
├── routes/
│   └── routes.ts
│
├── utils/
│   └── http-methods.ts
│
├── app.ts
└── server.ts
````

# 📡 Endpoints

## 🎧 Listar todos os episódios

### Request

```http
GET /api/list
```

### Response

```json
[
  {
    "podcastName": "Flow",
    "videoId": "pQSuQmUfS30",
    "episode": "CBUM - Flow #319",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/live/pQSuQmUfS30?si=lz3MBEwck5gMSiUU",
    "categories": ["saúde", "esporte", "bodybuilder"]
  }
]
```

---

## 🔎 Filtrar episódios por nome do podcast

### Request

```http
GET /api/episode?p=Flow
```

### Exemplo

```bash
http://localhost:3000/api/episode?p=Flow
```

### Response

```json
[
  {
    "podcastName": "Flow",
    "videoId": "4KDGTdi0V4I",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "cover": "https://i.ytimg.com/vi/4KDGTdi0V4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdi0V4I",
    "categories": ["esporte", "corrida"]
  }
]
```

---

# ⚙️ Como executar o projeto

## 1️⃣ Clone o repositório

```bash
git clone https://github.com/RhafaOli05/node-ts-WebApi-podcast-mananger-without-frameworks.git
```

---

## 2️⃣ Instale as dependências

```bash
npm install
```

---

## 3️⃣ Execute o projeto

```bash
npm run start:dev
```

---

# 🧠 Lógica das Rotas

Trecho principal do roteamento da aplicação:

```ts
import { getfilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
import * as http from "http";

export const app = async (req:http.IncomingMessage, res:http.ServerResponse) => {

    // Query String
    // http://localhost:3000/api/episode?p=Flow

    const baseUrl = req.url?.split("?")[0];

    // Rota para listar todos os episódios
    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getListEpisodes(req, res);
    }

    // Rota para filtrar episódios por nome do podcast
    if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
        await getfilterEpisodes(req, res);
    }
}
```

---

# 📖 Conceitos aplicados

* API REST
* Rotas HTTP
* Query Params
* Organização em camadas
* TypeScript
* Modularização
* Controllers

---

# 🎯 Melhorias futuras

* 🗄️ Banco de dados
* ❤️ Sistema de favoritos
* 📱 Frontend
* 🔍 Busca avançada
* (talvez mudar o tema do projeto - para gerenciador de livros, por exemplo)

---

## 📄 Licença

Este projeto está sob a licença MIT.

## 📚 Créditos

Projeto desenvolvido para fins de estudo com base em conceitos aprendidos em curso de Node.js e TypeScript.
