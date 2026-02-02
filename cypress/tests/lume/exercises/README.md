# QA Automation Exercise – Cypress (Login & Sign Up)

## 📌 Overview

This repository documents a **complete QA Automation case study** built on top of the **Cypress Real World App**.
The focus of this exercise is not only automation itself, but also **test design decisions, validation strategies, and real-world trade-offs** that a QA Engineer faces in production environments.

This project is intentionally documented as a **portfolio-ready case**, aiming to be easily understood by:

* Recruiters
* QA Leads
* Automation Engineers

---

## 🎯 Goals of This Exercise

* Design **realistic test scenarios** for critical user flows
* Apply **good automation practices** using Cypress
* Focus on **behavioral assertions**, not brittle UI checks
* Explicitly document **limitations and bugs found in the application**
* Demonstrate **QA thinking**, not only coding skills

---

## 🧪 Scope Covered

### Authentication Flows

* Login
* Sign Up (User Registration)

This README focuses on the **Sign Up flow**, fully modeled, implemented, and analyzed.

---

## 🔐 Test Case Design – Login

The Login flow was the **first functionality automated** in this exercise, as it represents a critical entry point to the system.

The focus during test design was:

* Authentication correctness
* Invalid credential handling
* Form-level validations
* Navigation behavior

### Test Cases Implemented – Login

| ID       | Description                                    |
| -------- | ---------------------------------------------- |
| CT001-LG | Login with valid credentials                   |
| CT002-LG | Login with username not registered             |
| CT003-LG | Login with valid username and invalid password |
| CT004-LG | Login with invalid username and valid password |
| CT005-LG | Attempt login without filling username         |
| CT006-LG | Attempt login without filling password         |
| CT007-LG | Navigate to Sign Up page from Login            |

---

## 🧩 Test Case Design – Sign Up

The Sign Up flow was modeled before automation, following a **clear and incremental strategy**.

### Test Cases Implemented

| ID       | Description                                |
| -------- | ------------------------------------------ |
| CT001-SU | Create account with valid data             |
| CT002-SU | Attempt to submit with all fields empty    |
| CT003-SU | First Name empty                           |
| CT004-SU | Last Name empty                            |
| CT005-SU | Username empty                             |
| CT006-SU | Password empty                             |
| CT007-SU | Confirm Password empty                     |
| CT008-SU | Password and Confirm Password do not match |
| CT009-SU | Username already exists                    |
| CT010-SU | Navigate to Login page from Sign Up        |

---

## 🛠️ Automation Strategy

### Key Principles Applied

* Prefer **behavior-based assertions** over static text assertions
* Validate **URL changes, disabled actions, and navigation state**
* Avoid fragile assertions tied to copy or UI wording
* Use `data-test` attributes as primary selectors

Example:

> Instead of asserting that an error message text appears, we assert that the **user cannot proceed**, or that a **submit action is blocked**.

---

## ⚠️ Known Application Limitation (CT009)

### Username Already Exists

During the execution of **CT009-SU**, a critical issue was identified:

* The application **allows registration using an already existing username**
* No backend or frontend validation prevents duplication

### QA Decision

* The test case is **kept intentionally**
* The behavior is documented as a **functional gap / bug**, not as a test failure

This demonstrates an important QA principle:

> **Automation should reflect product reality, not mask it.**

---

## 📂 Project Structure (Relevant)

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

## 📘 Why This README Matters

This document is part of a broader goal:

* Simulate **real-world QA documentation**
* Make the project **self-explanatory** without external guidance
* Allow anyone reviewing the repository to understand:

  * What was tested
  * Why it was tested
  * What was found

---

## 🚀 Next Steps

* PT-BR version of this README
* LinkedIn technical mini-series based on this case
* Expansion to advanced Login scenarios (session, logout, invalid tokens)

---

**Author:** Alyson Oliveira
**Role:** QA Automation Engineer
**Tools:** Cypress, TypeScript, Git, GitHub
