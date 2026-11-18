
# 🛒 Skinet E-commerce

![.NET](https://img.shields.io/badge/.NET-9-512BD4?style=flat-square&logo=dotnet&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=flat-square&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow?style=flat-square)

Projeto de estudos de um **e-commerce Full Stack**, desenvolvido com **C#, .NET 9, Angular 21 e PostgreSQL**.

Estou utilizando esse projeto para aprofundar meus conhecimentos em desenvolvimento de APIs REST, Entity Framework Core, arquitetura de software, organização de código e integração entre frontend e backend.

O desenvolvimento acontece de forma incremental, conforme avanço nos estudos e implemento novas funcionalidades.

---

## 🎯 Objetivos

- Aprofundar conhecimentos em C# e ASP.NET Core.
- Desenvolver APIs REST seguindo boas práticas.
- Trabalhar com Entity Framework Core e PostgreSQL.
- Aplicar os padrões Repository e Specification.
- Desenvolver interfaces com Angular 21.
- Integrar frontend e backend.
- Implementar autenticação e autorização.
- Praticar organização de código, arquitetura e testes automatizados.

---

## 🛠️ Tecnologias

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

## ✅ Funcionalidades implementadas

### Backend

- CRUD de produtos.
- Consulta de produtos por ID.
- Listagem de marcas e tipos de produtos.
- Implementação dos padrões Repository e Specification.
- Persistência de dados com Entity Framework Core e PostgreSQL.
- Migrations e seed de dados iniciais.
- Organização do backend em projetos separados: API, Core e Infrastructure.

### Frontend

- Criação do projeto com Angular 21.
- Configuração do Angular Material.
- Configuração do Tailwind CSS.
- Organização inicial das pastas `core`, `features`, `layout` e `shared`.
- Criação dos componentes iniciais da aplicação.
- Configuração inicial de rotas.

---

## 🚧 Próximas etapas

- Desenvolver as páginas do catálogo de produtos.
- Integrar o Angular com os endpoints da API.
- Implementar filtros e paginação de produtos no frontend.
- Desenvolver a página de detalhes dos produtos.
- Implementar o carrinho de compras.
- Adicionar autenticação e autorização.
- Implementar testes automatizados.
- Continuar aprimorando a arquitetura e a organização do código.

---

## 📁 Estrutura do projeto

O projeto está dividido em duas partes principais: **backend**, desenvolvido com .NET 9, e **frontend**, desenvolvido com Angular 21.

```text
skinet-ecommerce/
│
├── backend/
│   ├── API/
│   │   ├── Controllers/          # Endpoints da API
│   │   ├── DTOs/                 # Objetos de transferência de dados
│   │   ├── Middleware/           # Middlewares da aplicação
│   │   ├── Properties/           # Configurações de execução
│   │   ├── RequestHelpers/       # Classes auxiliares das requisições
│   │   ├── Program.cs            # Inicialização e configuração da API
│   │   ├── appsettings.json
│   │   ├── appsettings.Development.example.json
│   │   └── API.csproj
│   │
│   ├── Core/
│   │   ├── Entities/             # Entidades de domínio
│   │   ├── Interfaces/           # Contratos e abstrações
│   │   ├── Specification/        # Padrão Specification
│   │   └── Core.csproj
│   │
│   ├── Infrastructure/
│   │   ├── Config/               # Configurações de persistência
│   │   ├── Data/                 # Acesso a dados
│   │   ├── Migrations/           # Migrations do EF Core
│   │   └── Infrastructure.csproj
│   │
│   └── skinet.sln
│
├── frontend/
│   └── client/
│       ├── public/               # Arquivos públicos
│       ├── src/
│       │   ├── app/
│       │   │   ├── core/         # Recursos centrais da aplicação
│       │   │   ├── features/     # Funcionalidades do e-commerce
│       │   │   ├── layout/       # Componentes de layout
│       │   │   ├── shared/       # Recursos reutilizáveis
│       │   │   ├── app.component.ts
│       │   │   ├── app.component.html
│       │   │   ├── app.component.scss
│       │   │   ├── app.config.ts
│       │   │   └── app.routes.ts
│       │   │
│       │   ├── index.html
│       │   ├── main.ts
│       │   ├── styles.scss
│       │   └── tailwind.css
│       │
│       ├── angular.json
│       ├── package.json
│       └── tsconfig.json
│
└── README.md
```

### Organização do backend

O backend está dividido em três projetos:

- **API:** responsável pelos controllers, endpoints HTTP, DTOs, middlewares e configurações da aplicação.
- **Core:** contém as entidades, interfaces e especificações utilizadas pelas regras de negócio.
- **Infrastructure:** concentra o acesso aos dados, as configurações de persistência e as migrations do Entity Framework Core.

Essa separação permite organizar melhor as responsabilidades e facilita a manutenção da aplicação.

### Organização do frontend

O frontend utiliza Angular 21 e está organizado por responsabilidades:

- **core:** recursos e serviços centrais da aplicação.
- **features:** funcionalidades específicas do e-commerce.
- **layout:** componentes responsáveis pela estrutura visual.
- **shared:** componentes e recursos reutilizáveis.

A estrutura está sendo preparada para receber novas funcionalidades conforme o desenvolvimento avança.

---

## 🚀 Como executar

### Pré-requisitos

Antes de começar, é necessário ter instalado:

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

Na pasta `backend/API`, copie o arquivo de exemplo:

```bash
cp appsettings.Development.example.json appsettings.Development.json
```

Configure a connection string no arquivo `appsettings.Development.json` com as informações do seu banco de dados PostgreSQL.

### 3. Execute o backend

A partir da raiz do repositório:

```bash
cd backend/API
dotnet restore
dotnet run
```

A API será iniciada no endereço configurado para o ambiente de desenvolvimento.

As migrations e os dados iniciais são aplicados automaticamente durante a inicialização da API.

### 4. Execute o frontend

Abra outro terminal e, a partir da raiz do repositório, execute:

```bash
cd frontend/client
npm install
npm start
```

Por padrão, a aplicação Angular estará disponível em:

http://localhost:4200

> O frontend ainda está em desenvolvimento. Algumas funcionalidades do e-commerce ainda não estarão disponíveis.

---

## 📚 Sobre o projeto

O Skinet faz parte da minha jornada de aprendizado e evolução como desenvolvedora Full Stack.

A proposta é desenvolver um e-commerce completo, aplicando conceitos de desenvolvimento backend com .NET, persistência de dados com Entity Framework Core e PostgreSQL, além da construção de interfaces modernas utilizando Angular.

Mais do que concluir uma aplicação funcional, meu objetivo é compreender melhor a arquitetura, os padrões de projeto e as boas práticas utilizadas no desenvolvimento de software.

---

## 📬 Contato

- [LinkedIn](https://www.linkedin.com/in/pamelabadermann/)
- [GitHub](https://github.com/PamelaMBadermann)

---

**Desenvolvido por Pam Badermann.**