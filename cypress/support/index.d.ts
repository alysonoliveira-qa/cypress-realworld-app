/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {

      signup(user: {
        firstName: string
        lastName: string
        username: string
        password: string
      }): Chainable<void>

      login(username: string, password: string): Chainable<void>

      createBankAccount(): Chainable<void>

    }
  }
}

export {}
