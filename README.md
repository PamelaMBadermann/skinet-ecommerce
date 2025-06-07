# 🛒 Skinet [EM CONSTRUÇÃO]

Projeto de estudo de um e-commerce desenvolvido com **.NET 9** no backend e **Angular** no frontend.  
O objetivo principal é aprofundar meus conhecimentos em desenvolvimento web com .NET, explorando conceitos como API RESTful, Entity Framework Core, autenticação, consumo de APIs no Angular, entre outros.

---

## 🎯 Objetivos de Aprendizado

- Aprimorar habilidades com **.NET 9** e **C#**
- Utilizar **Entity Framework Core** com **PostgreSQL**
- Criar uma **API RESTful** robusta e segura
- Consumir APIs com **Angular**
- Trabalhar com autenticação (JWT)
- Aplicar boas práticas de arquitetura e design

---

## 🛠️ Tecnologias Utilizadas

### Backend
- .NET 9
- Entity Framework Core
- AutoMapper
- PostgreSQL
- JWT para autenticação
- Swagger

### Frontend
- Angular 17
- RxJS
- Angular Material
- Consumo de API via HttpClient

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- [.NET 9 SDK](https://dotnet.microsoft.com/) instalado
- [Node.js](https://nodejs.org/) e [Angular CLI](https://angular.io/cli) instalados
- [PostgreSQL](https://www.postgresql.org/) instalado e configurado

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/skinet.git

# Backend
cd skinet/API
dotnet restore
dotnet ef database update  # Executar migrations
dotnet run

# Frontend
cd ../client
npm install
ng serve

## 📁 Estrutura do Projeto
/skinet
  ├── API               # Projeto principal do backend
  ├── Core              # Entidades e interfaces
  ├── Infrastructure    # Implementações de acesso a dados
  └── client            # Aplicação Angular

## 📬 Contato

Caso tenha interesse em trocar experiências ou acompanhar minha jornada, você pode me encontrar por aqui:

- [LinkedIn](https://www.linkedin.com/in/pamelabadermann/)
- [GitHub](https://github.com/PamelaMBadermann/)


