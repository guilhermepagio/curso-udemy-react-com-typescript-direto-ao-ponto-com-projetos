# ⚛️ React JS com TypeScript — Direto ao Ponto com Projetos

> Repositório de estudos do curso **[React JS com TypeScript Direto ao Ponto c/ Projetos](https://www.udemy.com/course/react-js-com-typescript-direto-ao-ponto-c-projetos)** disponível na Udemy.

---

## 📖 Sobre o Curso

Este curso aborda do zero ao avançado o desenvolvimento de aplicações modernas com **React 19** e **TypeScript**, com foco em projetos práticos. O conteúdo é estruturado de forma progressiva, cobrindo desde os fundamentos do React até conceitos avançados como tipagem com TypeScript, gerenciamento de estado, roteamento, consumo de APIs e validação de formulários.

---

## 🗂️ Estrutura do Repositório

O repositório está organizado em módulos numerados, cada um correspondendo a uma seção do curso:

```
📦 curso-udemy-react-com-typescript-direto-ao-ponto-com-projetos
 ┣ 📁 1_setup              → Configuração do ambiente de desenvolvimento
 ┣ 📁 2_fundamentos        → Fundamentos (props, estado, eventos, render condicional)
 ┣ 📁 3_hooks              → Hooks do React (useState, useEffect, useContext, custom hooks)
 ┣ 📁 4_todo_list          → Projeto: Lista de Tarefas (To-Do List)
 ┣ 📁 5_react_router       → Navegação com React Router DOM
 ┣ 📁 7_projeto_ecommerce  → Projeto: E-Commerce com carrinho de compras
 ┣ 📁 8_ts                 → Fundamentos de TypeScript
 ┣ 📁 9_react_ts           → React com TypeScript (tipagem de componentes, hooks e APIs)
 ┣ 📁 10_churrascometro    → Projeto: Churrascômetro (calculadora de churrasco)
 ┣ 📁 11_github_finder     → Projeto: GitHub Finder (busca de usuários/repositórios via API)
 ┗ 📁 12_react_hook_form   → Formulários com React Hook Form + Zod + Tailwind CSS
```

---

## 📚 Conteúdo por Módulo

### 1️⃣ `1_setup` — Configuração do Ambiente
Preparação do ambiente de desenvolvimento com **Vite**, **Node.js** e extensões recomendadas para o VS Code.

---

### 2️⃣ `2_fundamentos` — Fundamentos do React
Introdução aos conceitos essenciais do React:
- Criação e uso de **componentes funcionais**
- **JSX** — sintaxe e expressões
- **Props** — passagem de dados entre componentes (pai → filho, filho → pai via funções)
- **Estado** com `useState`
- **Renderização condicional** e **listas** com `.map()`
- **Formulários controlados**
- **Estilização** com CSS inline e arquivos `.css`

**Stack:** React 19 · Vite · JavaScript (JSX)

---

### 3️⃣ `3_hooks` — Hooks do React
Aprofundamento nos hooks nativos e criação de hooks personalizados:
- `useState`, `useEffect`, `useContext`
- **Context API** para gerenciamento de estado global
- **Custom Hooks** (ex: `useWindowSize`)

**Stack:** React 19 · Vite · JavaScript (JSX)

---

### 4️⃣ `4_todo_list` — Projeto: Lista de Tarefas
Aplicação prática dos fundamentos com um clássico projeto de **To-Do List**:
- Adição, remoção e marcação de tarefas como concluídas
- Gerenciamento de estado com `useState`
- Componentização da interface

**Stack:** React 19 · Vite · JavaScript (JSX)

---

### 5️⃣ `5_react_router` — React Router DOM
Navegação entre páginas em uma Single Page Application (SPA):
- Configuração de rotas com **React Router DOM v7**
- Rotas aninhadas e dinâmicas
- Componentes `<Link>`, `<NavLink>`, `useNavigate`, `useParams`

**Stack:** React 19 · React Router DOM v7 · Vite · JavaScript (JSX)

---

### 7️⃣ `7_projeto_ecommerce` — Projeto: E-Commerce
Projeto completo de loja virtual com funcionalidades reais:
- Listagem de produtos (dados mockados em JSON)
- **Carrinho de compras** com adição, remoção e contagem de itens
- **Notificações** com `react-toastify`
- Navegação entre páginas com **React Router DOM v7**
- Gerenciamento de estado global do carrinho

**Stack:** React 19 · React Router DOM v7 · React Toastify · Vite · JavaScript (JSX)

---

### 8️⃣ `8_ts` — Fundamentos de TypeScript
Introdução ao TypeScript puro, sem React:
- Tipos primitivos: `string`, `number`, `boolean`
- Arrays, objetos e **Tuplas**
- **Enums**
- **Interfaces** e **Classes**
- **Generics**
- Inferência de tipos

**Stack:** TypeScript

---

### 9️⃣ `9_react_ts` — React com TypeScript
Integração do TypeScript com React:
- Tipagem de **componentes**, **props** e **estado**
- Tipagem de **eventos** e **refs**
- Uso de **Context API** com TypeScript
- **Reducers** tipados com `useReducer`
- **Custom hooks** tipados
- Consumo de **APIs REST** com **Axios** tipado

**Stack:** React 19 · TypeScript · Axios · Vite

---

### 🔟 `10_churrascometro` — Projeto: Churrascômetro
Aplicação React + TypeScript para calcular a quantidade de ingredientes para um churrasco:
- Formulário com entradas tipadas
- Cálculo dinâmico baseado no número de convidados
- Múltiplas páginas com React Router DOM
- Tipagem completa com TypeScript

**Stack:** React 19 · TypeScript · React Router DOM · Vite

---

### 1️⃣1️⃣ `11_github_finder` — Projeto: GitHub Finder
Aplicação que consome a **API pública do GitHub** para buscar perfis e repositórios:
- Busca de usuários por nome de login
- Exibição de **repositórios** com links diretos
- Navegação entre páginas (Perfil → Repositórios)
- Ícones com **react-icons**
- **CSS Modules** para estilização por componente

**Stack:** React 19 · TypeScript · React Router DOM v7 · React Icons · GitHub REST API · Vite

---

### 1️⃣2️⃣ `12_react_hook_form` — Formulários com React Hook Form
Gerenciamento avançado de formulários:
- **React Hook Form** para controle de inputs de forma performática
- Validação de esquemas com **Zod**
- Integração `@hookform/resolvers` + Zod
- Estilização com **Tailwind CSS v4**
- Custom hooks para lógica de formulário

**Stack:** React 19 · TypeScript · React Hook Form · Zod · Tailwind CSS v4 · Vite

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| ⚛️ React 19 | Biblioteca principal para construção de interfaces |
| 🔷 TypeScript | Superset tipado do JavaScript |
| ⚡ Vite | Bundler ultrarrápido para desenvolvimento |
| 🧭 React Router DOM v7 | Roteamento em SPAs |
| 🪝 React Hook Form | Gerenciamento de formulários performático |
| ✅ Zod | Validação de esquemas e tipos |
| 🎨 Tailwind CSS v4 | Framework CSS utilitário |
| 📡 Axios | Cliente HTTP para consumo de APIs |
| 🔔 React Toastify | Notificações toast |
| 🎯 React Icons | Biblioteca de ícones para React |

---

## 🚀 Como Executar os Projetos

Cada módulo/projeto possui sua própria estrutura de dependências. Para executar qualquer um deles:

```bash
# 1. Acesse a pasta do módulo desejado
cd 4_todo_list   # exemplo

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173` (porta padrão do Vite).

---

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) v22.13.1 ou superior
- [npm](https://www.npmjs.com/) v10.9.2 ou superior
- Editor de código recomendado: [VS Code](https://code.visualstudio.com/)

---

## 🔗 Links Úteis

- 🎓 [Curso na Udemy](https://www.udemy.com/course/react-js-com-typescript-direto-ao-ponto-c-projetos)
- ⚛️ [Documentação do React](https://react.dev)
- 🔷 [Documentação do TypeScript](https://www.typescriptlang.org/docs/)

---

## 👨‍💻 Autor

Desenvolvido por **Guilherme Pagio** como parte dos estudos do curso React JS com TypeScript na Udemy.

---

<p align="center">
  Feito com ❤️ e ⚛️ React
</p>
