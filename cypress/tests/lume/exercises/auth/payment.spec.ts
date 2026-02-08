import { users } from "../../../../fixtures/users"
import { generateAmount } from "../../../../support/utility"


describe('Deve enviar dinheiro com sucesso', () => {
  it('CT001-PG Enviar dinheiro com saldo suficiente', () => {
    // Arrange
    const amount = generateAmount(1,100)
    cy.visit('http://localhost:3000')
    cy.login(users.validUser.username, users.validUser.password)

    // Act
    cy.get('[data-test="nav-top-new-transaction"]').click()

    cy.get('[data-test="user-list-search-input"]').type(users.friendsList.friend1)
    cy.contains(users.friendsList.friend1).click()

    cy.get('[name="amount"]').type(amount.toString())
    cy.get('.MuiInputBase-root > [name="description"]').type('Payment')
    cy.get('[data-test="transaction-create-submit-payment"]').click()

    // Assert
    cy.contains('Transaction Submitted!').should('be.visible')
    cy.contains(`Paid $${amount}.00`).should('be.visible')
    cy.url().should('include', '/transaction')
  })

  it.only('CT002-PG Enviar dinheiro com saldo insuficiente', () => {
    // Arrange
    const overAmount = generateAmount(10000,100000)
    //const accountBalance ='[data-test="sidenav-user-balance"]'
    cy.visit('http://localhost:3000')
    cy.login(users.validUser.username, users.validUser.password)

    // Act
    cy.get('[data-test="nav-top-new-transaction"]').click()

    cy.get('[data-test="user-list-search-input"]').type(users.friendsList.friend1)
    cy.contains(users.friendsList.friend1).click()

    cy.get('[name="amount"]').type(overAmount.toString())
    cy.get('.MuiInputBase-root > [name="description"]').type('Over Payment')
    cy.get('[data-test="transaction-create-submit-payment"]').click()

    // Assert
    cy.contains('Transaction Submitted!').should('be.visible')
    cy.contains("$0.00").should('be.visible')
    cy.url().should('include', '/transaction')
  })
})



