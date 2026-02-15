import { users } from "../../../../fixtures/users"

describe('Visualizar histórico de transações com sucesso', () => {
    
  it.only('CT01 - Deve visualizar detalhes de uma transação existente', () => {
    // Arrange
    cy.visit('http://localhost:3000')
    cy.login(users.validUser.username, users.validUser.password)

    // Act1
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').type(users.friendList.friend1)
    cy.contains(users.friendList.friend1).click()

    cy.get('[name="amount"]').type('50')
    cy.get('.MuiInputBase-root > [name="description"]').type('Test ensure transaction exists')
    cy.get('[data-test="transaction-create-submit-payment"]').click()

    cy.contains('Transaction Submitted!').should('be.visible')

    // Act2
    cy.get('[data-test="new-transaction-return-to-transactions"]').click()
    cy.get('[data-test="nav-personal-tab"]').click()
    cy.contains(users.friendList.friend1).click()

    // Assert
    cy.contains('Transaction Detail').should('be.visible')
    cy.url().should('include', '/transaction')
  })

})
