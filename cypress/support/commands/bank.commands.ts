Cypress.Commands.add('createBankAccount', () => {
  cy.get('[data-test="user-onboarding-next"]').click()
  cy.get('[data-test="user-onboarding-dialog"]').should('be.visible')
  cy.get('[data-test="bankaccount-bankName-input"]').type('Test Bank')
  cy.get('[data-test="bankaccount-routingNumber-input"]').type('123456789')
  cy.get('[data-test="bankaccount-accountNumber-input"]').type('987654321')
  cy.get('[data-test="bankaccount-submit"]').click()
})
