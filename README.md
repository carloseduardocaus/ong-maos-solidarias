# 🤝 ONG Mãos Solidárias — Single Page Application (SPA)

> Plataforma web dinâmica, moderna e acessível desenvolvida para a organização do terceiro setor **Mãos Solidárias**, focada em engajamento de voluntários, divulgação de ações comunitárias e captação de recursos.

[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-green.svg)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)](https://semver.org)

---

## 📌 Visão Geral do Projeto

O projeto foi concebido para suprir a demanda de presença digital profissional e acessível para o terceiro setor. A solução adota a arquitetura de **Single Page Application (SPA)** em JavaScript puro (Vanilla JS), garantindo navegação instantânea sem recarregamento da página, associada a um Design System consistente e responsivo.

---

## 🚀 Tecnologias Utilizadas

A stack técnica foi selecionada priorizando padrões web abertos, performance e manutenibilidade:

- **HTML5 Semântico:** Estruturação orientada a padrões e suporte para tecnologias assistivas (leitores de ecrã).
- **CSS3 Avançado:**
  - Design System baseado em variáveis CSS (`:root`).
  - Layout bidimensional macroscópico via **CSS Grid (12 colunas)** com 5 *breakpoints*.
  - Alinhamento microscópico flexível via **Flexbox**.
  - Estados interativos e acessíveis com `:focus-visible`, `:hover` e feedback visual.
- **Vanilla JavaScript (ES6+):**
  - Roteamento SPA baseado em hash (`window.location.hash` e `hashchange`).
  - Renderização dinâmica de componentes com **Template Literals**.
  - Validação de formulários em tempo real com **Expressões Regulares (RegEx)** e Constraint Validation.
  - Persistência e retenção de dados através de **Web Storage API (`localStorage`)**.
  - Arquitetura de código modularizada via **ES6 Modules (`import`/`export`)**.
- **Bibliotecas Externas:**
  - **SweetAlert2 (via CDN):** Diálogos e modais assíncronos estilizados e acessíveis para confirmação e feedback de ações.

---

## ♿ Acessibilidade (WCAG 2.1 Nível AA)

A aplicação cumpre com rigor os requisitos das diretrizes internacionais da W3C/WAI:
- **Navegação completa por teclado:** Suporte a teclas `Tab`, `Shift + Tab` e `Enter/Espaço`, com anéis de foco visualmente evidentes (`:focus-visible`).
- **Contraste de Cores:** Rácio mínimo de contraste superior a 4.5:1 em todos os textos sobre fundos sólidos.
- **Marcação ARIA:** Implementação de atributos como `aria-expanded`, `aria-invalid`, `aria-describedby` e `aria-current` nos módulos dinâmicos.
- **Imagens Acessíveis:** Descrições textuais alternativas (`alt`) significativas em todos os elementos gráficos.

---

## 📁 Estrutura de Diretórios

```text
ong-maos-solidarias/
│
├── index.html              # Shell da SPA e ponto de entrada da aplicação
├── README.md               # Documentação técnica do projeto
│
├── css/
│   ├── style.css           # Design System (:root), grid e tipografia global
│   └── components.css      # Estilos dos componentes (cards, botões, modais, alertas)
│
├── js/
│   ├── app.js              # Script principal e orquestrador da SPA
│   ├── router.js           # Gerenciador de rotas e navegação via hash
│   ├── templates.js        # Definição e injeção dos templates dinâmicos
│   ├── validators.js       # Regras de validação de formulário e máscaras de input
│   └── storage.js          # Módulo de persistência no localStorage
│
└── img/                    # Recursos de imagem e logótipo vetorial
