
# 🛒 Skinet E-commerce

![.NET](https://img.shields.io/badge/.NET-9-512BD4?style=flat-square&logo=dotnet&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=flat-square&logo=angular&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

🚧 **Projeto em desenvolvimento**

O Skinet é um projeto de estudos de um e-commerce Full Stack, desenvolvido com **C#, .NET 9, Angular 21 e PostgreSQL**.

Estou utilizando esse projeto para praticar o desenvolvimento de APIs REST com ASP.NET Core, trabalhar com Entity Framework Core e aprofundar meus conhecimentos em Angular.

Além de implementar as funcionalidades de um e-commerce, também estou aproveitando para estudar padrões de projeto, organização de código e integração entre frontend e backend.

O desenvolvimento está acontecendo aos poucos, conforme avanço nos estudos e coloco novos conceitos em prática.

---

## 🎯 Objetivos

- Aprofundar meus conhecimentos em C# e ASP.NET Core.
- Desenvolver e consumir APIs REST.
- Trabalhar com Entity Framework Core e PostgreSQL.
- Praticar os padrões Repository e Specification.
- Desenvolver o frontend utilizando Angular 21.
- Aprender mais sobre organização de código e boas práticas.
- Implementar autenticação e outras funcionalidades de um e-commerce.

---

## 🛠️ Tecnologias utilizadas

### Backend
- C# / .NET 9
- ASP.NET Core Web API
- Entity Framework Core
- PostgreSQL
- Repository Pattern
- Specification Pattern

### Frontend
- Angular 21
- TypeScript
- Angular Material
- Tailwind CSS
- SCSS

### Ferramentas
- Docker
- Git e GitHub
- Postman
- Visual Studio Code
- Entity Framework Core CLI

---

## ✅ O que já foi desenvolvido

### Backend

- CRUD de produtos.
- Consulta de produtos por ID.
- Listagem de marcas e tipos de produtos.
- Implementação dos padrões Repository e Specification.
- Persistência dos dados utilizando Entity Framework Core e PostgreSQL.
- Migrations e inserção de dados iniciais (seed).
- Organização do backend em três projetos: API, Core e Infrastructure.

### Frontend

- Criação do projeto com Angular 21.
- Configuração do Angular Material.
- Configuração do Tailwind CSS.
- Organização inicial das pastas `core`, `features`, `layout` e `shared`.
- Criação dos componentes iniciais da aplicação.

O frontend ainda está nas etapas iniciais de desenvolvimento.

---

## 🚧 Próximos passos

- Criar as páginas do catálogo de produtos.
- Integrar o frontend com a API.
- Implementar filtros e paginação de produtos.
- Desenvolver a página de detalhes dos produtos.
- Criar o carrinho de compras.
- Implementar autenticação e autorização.

---

## 📁 Estrutura do projeto

O projeto está dividido em backend e frontend.

```text
skinet-ecommerce/
│
├── backend/
│   ├── API/
│   │   ├── Controllers/
│   │   ├── DTOs/
│   │   ├── Middleware/
│   │   ├── RequestHelpers/
│   │   └── Program.cs
│   │
│   ├── Core/
│   │   ├── Entities/
│   │   ├── Interfaces/
│   │   └── Specification/
│   │
│   ├── Infrastructure/
│   │   ├── Config/
│   │   ├── Data/
│   │   └── Migrations/
│   │
│   └── skinet.sln
│
├── frontend/
│   └── client/
│       ├── public/
│       ├── src/
│       │   ├── app/
│       │   │   ├── core/
│       │   │   ├── features/
│       │   │   ├── layout/
│       │   │   └── shared/
│       │   ├── styles.scss
│       │   └── tailwind.css
│       │
│       ├── angular.json
│       └── package.json
│
└── README.md
```

No backend, separei o código em três projetos para organizar melhor a API, as entidades e o acesso ao banco de dados.

No frontend, estou seguindo uma estrutura com pastas para as funcionalidades, componentes compartilhados e layout da aplicação.

---

## 🚀 Como executar

### Pré-requisitos

- .NET SDK 9
- Node.js e npm compatíveis com Angular 21
- PostgreSQL (local ou Docker)
- Entity Framework Core CLI

### 1. Clone o repositório

```bash
git clone https://github.com/PamelaMBadermann/skinet-ecommerce.git
cd skinet-ecommerce
```

### 2. Configure o banco de dados

Certifique-se de que o PostgreSQL esteja em execução.

Na pasta `backend/API`, copie o arquivo `appsettings.Development.example.json` para `appsettings.Development.json` e configure a connection string com os dados do seu banco.

### 3. Execute o backend

Na raiz do repositório, execute:

```bash
cd backend/API
dotnet restore
dotnet run
```

As migrations e os dados iniciais são aplicados automaticamente ao iniciar a API.

### 4. Execute o frontend

Em outro terminal, a partir da raiz do repositório:

```bash
cd frontend/client
npm install
npm start
```

A aplicação Angular estará disponível, por padrão, em:

https://localhost:4200

**Observação:** o frontend ainda está em desenvolvimento, então nem todas as funcionalidades do e-commerce estão disponíveis.

---

## 📚 Sobre o projeto

O Skinet faz parte dos meus estudos e da minha evolução como desenvolvedora Full Stack.

A ideia é ir construindo um e-commerce completo enquanto pratico tecnologias que já conheço e aprendo novos conceitos, principalmente relacionados ao .NET e ao Angular.

Também estou utilizando o projeto para melhorar minha organização de código e entender melhor como as diferentes partes de uma aplicação trabalham juntas.

---

## 📬 Contato

- [LinkedIn](https://www.linkedin.com/in/pamelabadermann/)
- [GitHub](https://github.com/PamelaMBadermann)

---

**Desenvolvido por Pamela Badermann.**