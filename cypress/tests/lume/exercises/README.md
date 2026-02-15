QA Automation Case Study – Cypress Real World App
📌 Overview

This repository documents a portfolio-grade QA Automation case study built on top of the Cypress Real World App.

The goal is not just automation — but demonstrating:

Test design thinking

Architecture decisions

Behavior-driven validation

Maintainability strategies

Real bug discovery

This project reflects a transition from QA to Quality Engineering mindset.

🎯 Objectives

Design realistic end-to-end scenarios

Automate critical user journeys

Validate business behavior instead of UI text

Apply scalable test architecture

Document decisions and trade-offs

🧪 Scope Covered
🔐 Authentication
Login
ID	Description
CT001-LG	Login with valid credentials
CT002-LG	Username not registered
CT003-LG	Valid username + invalid password
CT004-LG	Invalid username + valid password
CT005-LG	Username empty
CT006-LG	Password empty
CT007-LG	Navigation to Sign Up
Sign Up
ID	Description
CT001-SU	Create account with valid data
CT002-SU	Submit with all fields empty
CT003-SU	First Name empty
CT004-SU	Last Name empty
CT005-SU	Username empty
CT006-SU	Password empty
CT007-SU	Confirm Password empty
CT008-SU	Password mismatch
CT009-SU	Username already exists (bug documented)
CT010-SU	Navigate to Login
💸 Transactions & Payments
Money Transfer

Transfer with sufficient balance

Transfer with insufficient balance

Transfer with dynamic values

Edge case: negative value bug discovered

Transactions History

Validate transaction list rendering

Open transaction details

Validate /transaction URL

CT-002: User with no transactions should see empty state message

🧱 Test Architecture

Custom Cypress commands were refactored and organized by domain:

cypress/
 └── support/
     └── commands/
         ├── auth.commands.ts
         ├── bank.commands.ts
         └── transaction.commands.ts

Why?

Separation of concerns

Maintainability

Scalability

Clear domain responsibility

TypeScript declarations were added via index.d.ts to ensure full type safety for custom commands.

🧠 Automation Principles Applied

Behavior-based assertions over static text assertions

Validation of navigation and state

Use of data-test attributes as stable selectors

Avoid brittle UI-dependent checks

Incremental commits following Conventional Commits

🐞 Real Bug Discovered

A critical business logic flaw was identified:

Sending a negative value during transfer increases the sender’s balance.

This was documented as a real system issue.

This demonstrates:

Exploratory mindset

Edge-case validation

Business-rule awareness

📂 Project Structure (Relevant)
cypress/
 └── tests/
     └── lume/
         └── exercises/
             └── auth/
                 ├── login.spec.ts
                 ├── signup.spec.ts
                 ├── payment.spec.ts
                 ├── transactions.spec.ts
                 └── notransactions.spec.ts

📘 Why This Case Matters

This repository is structured to simulate:

Real QA documentation

Real-world automation evolution

Professional commit history

Engineering-level thinking applied to testing

🚀 What This Project Demonstrates

QA → QE transition

Structured automation architecture

Domain-driven test organization

Bug discovery and documentation

Clean Git history practices

Author: Alyson Oliveira
Role: QA in transition to Quality Engineering
Stack: Cypress · TypeScript · Git · GitHub
