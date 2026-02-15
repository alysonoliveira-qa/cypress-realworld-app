Cypress.Commands.add('signup', (user) => {
  cy.visit('/signup')
  cy.get('[data-test="signup-first-name"]').type(user.firstName)
  cy.get('[data-test="signup-last-name"]').type(user.lastName)
  cy.get('[data-test="signup-username"]').type(user.username)
  cy.get('[data-test="signup-password"]').type(user.password)
  cy.get('[data-test="signup-confirmPassword"]').type(user.password)
  cy.get('[data-test="signup-submit"]').click()
})

Cypress.Commands.add('login', (username, password) => {
  cy.visit('/signin')
  cy.get('[data-test="signin-username"]').type(username)
  cy.get('[data-test="signin-password"]').type(password)
  cy.get('[data-test="signin-submit"]').click()
})
