# 🛒 Skinet [EM CONSTRUÇÃO]

Projeto de estudos de um e-commerce desenvolvido com **C# e .NET 9**.

Estou usando esse projeto para praticar desenvolvimento de APIs com ASP.NET Core, trabalhar com Entity Framework Core e aprender mais sobre organização de código e acesso a dados. A ideia é continuar evoluindo o projeto e, futuramente, adicionar o frontend com Angular.

## 🎯 Objetivos

- Praticar C# e ASP.NET Core
- Criar e consumir APIs REST
- Trabalhar com Entity Framework Core e SQL Server
- Estudar os padrões Repository e Specification
- Implementar autenticação e integrar com Angular futuramente

## 🛠️ Tecnologias

- C# / .NET 9
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server

## ✅ O que já foi feito

- Cadastro, listagem, edição e exclusão de produtos
- Consulta de produtos por ID
- Listagem de marcas e tipos de produtos
- Repositórios e specifications para as consultas
- Migrations e dados iniciais do banco

## 🚀 Como rodar o projeto

### Pré-requisitos

- [.NET SDK 9](https://dotnet.microsoft.com/download/dotnet/9.0)
- SQL Server instalado e em execução
- [Git](https://git-scm.com/)
- Entity Framework Core CLI (para executar migrations pelo terminal)

### Passos

**1. Clone o repositório:**

```bash
git clone https://github.com/PamelaMBadermann/skinet-ecommerce.git
cd skinet-ecommerce
```

**2. Configure o banco:**

No arquivo `API/appsettings.Development.json`, ajuste a connection string `DefaultConnection` com os dados do seu SQL Server.

**3. Execute a API:**

```bash
cd API
dotnet restore
dotnet run
```

Ao iniciar, a API aplica as migrations e insere os dados iniciais automaticamente.

Se precisar executar as migrations manualmente, dentro da pasta `API` use:

```bash
dotnet ef database update --project ../Infrastructure --startup-project .
```

## 📁 Estrutura do projeto

```text
skinet-ecommerce/
├── API/              # Controllers e configuração da API
├── Core/             # Entidades e interfaces
└── Infrastructure/   # Acesso a dados e migrations
```

## 📬 Contato

- [LinkedIn](https://www.linkedin.com/in/pamelabadermann/)
- [GitHub](https://github.com/PamelaMBadermann)
