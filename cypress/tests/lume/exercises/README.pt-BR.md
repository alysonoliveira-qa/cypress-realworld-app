# Case de Automação QA – Cypress (Login e Cadastro)

## 📌 Visão Geral

Este repositório documenta um **case completo de automação de testes em QA**, construído sobre o **Cypress Real World App**.

O objetivo deste exercício vai além da automação em si: ele foi pensado para evidenciar **raciocínio de QA**, decisões técnicas, estratégias de validação e limitações reais encontradas em um sistema em funcionamento.

Este material foi estruturado como um **case de portfólio**, com foco em clareza e fácil entendimento para:

* Recrutadores
* QA Leads
* Engenheiros de Qualidade e Automação

---

## 🎯 Objetivos do Exercício

* Modelar **cenários realistas de teste** para fluxos críticos
* Aplicar **boas práticas de automação** utilizando Cypress
* Priorizar **validações comportamentais**, evitando asserts frágeis
* Documentar **bugs e limitações reais do produto**
* Demonstrar **maturidade em QA**, não apenas habilidade técnica

---

## 🧪 Escopo Coberto

### Fluxos de Autenticação

* Login
* Cadastro de Usuário (Sign Up)

Este README descreve ambos os fluxos, com **ênfase maior no Cadastro**, onde foram identificados comportamentos relevantes do sistema.

---

## 🔐 Modelagem de Casos de Teste – Login

O fluxo de Login foi a **primeira funcionalidade automatizada**, por representar o ponto de entrada principal da aplicação.

Durante a modelagem dos testes, o foco esteve em:

* Correção da autenticação
* Tratamento de credenciais inválidas
* Validações de formulário
* Comportamento de navegação

### Casos de Teste Implementados – Login

| ID       | Descrição                                           |
| -------- | --------------------------------------------------- |
| CT001-LG | Login com credenciais válidas                       |
| CT002-LG | Login com username não cadastrado                   |
| CT003-LG | Username válido e senha inválida                    |
| CT004-LG | Username inválido e senha válida                    |
| CT005-LG | Tentativa de login sem preencher o username         |
| CT006-LG | Tentativa de login sem preencher a senha            |
| CT007-LG | Navegação para a tela de cadastro a partir do Login |

---

## 🧩 Modelagem de Casos de Teste – Cadastro (Sign Up)

O fluxo de Cadastro foi aprofundado propositalmente, por envolver múltiplas validações de formulário e diferentes comportamentos de UX.

### Casos de Teste Implementados – Cadastro

| ID       | Descrição                                       |
| -------- | ----------------------------------------------- |
| CT001-SU | Criar conta com dados válidos                   |
| CT002-SU | Submeter formulário com todos os campos vazios  |
| CT003-SU | Campo First Name não preenchido                 |
| CT004-SU | Campo Last Name não preenchido                  |
| CT005-SU | Campo Username não preenchido                   |
| CT006-SU | Campo Password não preenchido                   |
| CT007-SU | Campo Confirm Password não preenchido           |
| CT008-SU | Password e Confirm Password não coincidem       |
| CT009-SU | Cadastro com username já existente              |
| CT010-SU | Navegar para Login a partir da tela de Cadastro |

---

## 🛠️ Estratégia de Automação

### Princípios Aplicados

* Preferência por **asserts baseados em comportamento**
* Validação de estados como:

  * botão desabilitado
  * permanência na rota
  * redirecionamento correto
* Evitar dependência excessiva de textos da interface
* Utilização de atributos `data-test` como seletores principais

> Exemplo: em vez de validar apenas mensagens de erro, valida-se que o usuário **não consegue prosseguir com a ação**.

---

## ⚠️ Limitação Identificada na Aplicação (CT009-SU)

### Cadastro com Username Já Existente

Durante a execução do **CT009-SU**, foi identificado um comportamento relevante:

* O sistema **permite o cadastro utilizando um username já existente**
* Não há bloqueio no frontend nem validação aparente no backend

### Decisão de QA

* O caso de teste foi **mantido intencionalmente**
* O comportamento foi documentado como **gap funcional / bug do produto**

Esse ponto reforça um princípio essencial de QA:

> **Automação deve refletir a realidade do produto, não mascará-la.**

---

## 📂 Estrutura do Projeto (Relevante para o Case)

```
cypress/
 └── tests/
     └── lume/
         └── exercises/
             └── auth/
                 ├── login.spec.ts
                 └── signup.spec.ts
```

---

## 📘 Por Que Este README É Importante

Este documento foi criado para simular **documentação real de QA em ambiente profissional**, permitindo que qualquer pessoa consiga entender rapidamente:

* O que foi testado
* Como foi testado
* Quais decisões foram tomadas
* Quais problemas foram encontrados

Sem a necessidade de explicações externas.

---

## 🚀 Próximos Passos

* Publicação de uma mini-série técnica no LinkedIn baseada neste case
* Expansão dos testes para cenários avançados de autenticação
* Evolução contínua do projeto como peça de portfólio

---

**Autor:** Alyson Oliveira
**Cargo:** QA Automation Engineer
**Ferramentas:** Cypress, TypeScript, Git, GitHub
