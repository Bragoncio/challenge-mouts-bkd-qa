<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=250&color=00FA9A&text=MOUTS%20QA&descAlign=50&descAlignY=50&textBg=false&animation=twinkling&descSize=1&stroke=E6E6FA&section=header&reversal=false">
<h1 align="center">🚀 Projeto de Automação Mouts QA FRONT e API</h1>
</p>


<p align="center">
  <a href="#-produto">💻 Produto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-stack">⚙ Stack</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-objetivo">🎯 Objetivo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-estrutura">🌌 Estrutura</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-execução">⏩ Execução</a>
</p>

<p align="center">
  <img alt="Cypress" src="https://img.shields.io/badge/cypress-%2317202C.svg?style=for-the-badge&logo=cypress&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black">
  <img alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
</p>

<p align="center">
  <b>👤 Participante: Leonardo Braga Protasio</b>
</p>

---

## 💻 Produto

<p align="justify">
O <strong>Projeto de Automação Mouts QA FRONT e API</strong> foi desenvolvido para atender ao desafio Mouts QA Front, com foco na automação de testes de qualidade para a interface de usuário.
</p>

---

## ⚙ Stack

Este projeto foi construído com as seguintes tecnologias:

| **Tecnologia**   | **Descrição**                       |
| ---------------- | ----------------------------------- |
| <a href="https://www.cypress.io/"><img src="https://img.shields.io/badge/Cypress-00FA9A?style=for-the-badge&logo=cypress&logoColor=white"></a> | Framework de teste end-to-end para a web. |
| <a href="https://www.javascript.com/"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></a> | Linguagem de programação utilizada no desenvolvimento do projeto. |

---

## 🎯 Objetivo

<p align="justify">
Este projeto de automação tem como objetivo garantir a execução confiável e repetitiva de um grande número de casos de teste em diversos ambientes. Além de proporcionar uma execução escalável, busca-se aprimorar a qualidade do software, oferecendo uma cobertura abrangente, especialmente em testes de regressão para verificar a reincidência de defeitos anteriormente corrigidos.
</p>

---

## 🌌 Estrutura

A organização do projeto segue uma estrutura lógica e modularizada, com foco em manutenibilidade, reaproveitamento e clareza. Está dividida em pastas específicas para cada responsabilidade, atendendo tanto testes de **frontend** quanto de **API**, e promovendo boas práticas como o uso de **helpers reutilizáveis**.

---

### 🗂️ challenge-mouts-bkd-qa

#### 📁 cypress

- **📁 e2e**  
  Contém os arquivos de testes end-to-end (E2E), separados por funcionalidades.  
  **Subpastas:**
  - `frontend/` – Testes de interface, como login, cadastro de usuários e produtos.
  - `api/` – Testes da API, como criação e deleção de usuários, validações de status e response.

- **📁 fixtures**  
  Contém dados estáticos (JSON) utilizados nos testes, podendo incluir mocks de usuários, produtos ou dados esperados.

- **📁 support**  
  Responsável por comandos personalizados, configuração global e helpers de apoio.  
  **Subpastas:**
  - `commands.js` – Comandos customizados do Cypress como `cy.login()` e navegação.
  - `e2e.js` – Setup global dos testes (hooks, beforeEach, etc).
  - `helpers/`  
    - `frontend/` – Métodos auxiliares para testes de UI, como `usuarioHelper.js` e `produtoHelper.js`.
    - `api/` – Métodos auxiliares para testes de API, como `usuarioApiHelper.js`.

---

## ⏩ Execução

### Local

- Clone o repositório
- Baixe o Node.js - [NodeJs](https://nodejs.org/pt)
- Instale o *Cypress*: ```npm install cypress --save-dev```
- Executar o ```npx cypress open``` no terminal do projeto
- Executar o comando ```npx cypress run``` para rodar os testes