# 🛒 Skinet [EM CONSTRUÇÃO]

Projeto de estudos de um e-commerce desenvolvido com **C# e .NET 9**.

Estou usando esse projeto para praticar desenvolvimento de APIs com ASP.NET Core, Entity Framework Core e organização de código. Futuramente, pretendo adicionar o frontend com Angular.

## 🎯 Objetivos

- Praticar C# e ASP.NET Core
- Desenvolver APIs REST
- Trabalhar com Entity Framework Core e SQL Server
- Estudar os padrões Repository e Specification
- Implementar autenticação e integrar com Angular

## 🛠️ Tecnologias

- C# / .NET 9
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- Docker

## ✅ Funcionalidades implementadas

- CRUD de produtos
- Consulta de produtos por ID
- Listagem de marcas e tipos
- Repository e Specification Pattern
- Migrations e seed de dados

## 🚀 Como executar

**Pré-requisitos:** .NET SDK 9, SQL Server (local ou Docker) e Entity Framework Core CLI.

1. Clone o repositório:

```bash
git clone https://github.com/PamelaMBadermann/skinet-ecommerce.git
cd skinet-ecommerce
```

2. Copie `API/appsettings.Development.example.json` para `API/appsettings.Development.json` e configure a connection string.

3. Execute a API:

```bash
cd API
dotnet restore
dotnet run
```

As migrations e os dados iniciais são aplicados automaticamente ao iniciar a API.

## 📁 Estrutura do projeto

```text
skinet-ecommerce/
├── API/              # Controllers e configuração
├── Core/             # Entidades e interfaces
└── Infrastructure/   # Acesso a dados e migrations
```

## 📬 Contato

- [LinkedIn](https://www.linkedin.com/in/pamelabadermann/)
- [GitHub](https://github.com/PamelaMBadermann)