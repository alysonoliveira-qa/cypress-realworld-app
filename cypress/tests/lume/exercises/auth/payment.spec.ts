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

    cy.get('[data-test="user-list-search-input"]').type(users.friendList.friend1)
    cy.contains(users.friendList.friend1).click()

    cy.get('[name="amount"]').type(amount.toString())
    cy.get('.MuiInputBase-root > [name="description"]').type('Payment')
    cy.get('[data-test="transaction-create-submit-payment"]').click()

    // Assert
    cy.contains('Transaction Submitted!').should('be.visible')
    cy.contains(`Paid $${amount}.00`).should('be.visible')
    cy.url().should('include', '/transaction')
  })

  it('CT002-PG Enviar dinheiro com saldo insuficiente', () => {
    // Arrange
    const overAmount = generateAmount(10000,100000)
    cy.visit('http://localhost:3000')
    cy.login(users.validUser.username, users.validUser.password)

    // Act
    cy.get('[data-test="nav-top-new-transaction"]').click()

    cy.get('[data-test="user-list-search-input"]').type(users.friendList.friend1)
    cy.contains(users.friendList.friend1).click()

    cy.get('[name="amount"]').type(overAmount.toString())
    cy.get('.MuiInputBase-root > [name="description"]').type('Over Payment')
    cy.get('[data-test="transaction-create-submit-payment"]').click()

    // Assert
    cy.contains('Transaction Submitted!').should('be.visible')
    cy.contains("$0.00").should('be.visible')
    cy.url().should('include', '/transaction')
  })

  it('CT004-PG Enviar dinheiro com valor zero', () => {
    // Arrange
    
    cy.visit('http://localhost:3000')
    cy.login(users.validUser.username, users.validUser.password)

    // Act
    cy.get('[data-test="nav-top-new-transaction"]').click()

    cy.get('[data-test="user-list-search-input"]').type(users.friendList.friend1)
    cy.contains(users.friendList.friend1).click()

    cy.get('[name="amount"]').type('0')
    cy.get('.MuiInputBase-root > [name="description"]').type('Over Payment')
    cy.get('[data-test="transaction-create-submit-payment"]').click()

    // Assert
    cy.contains('Transaction Submitted!').should('be.visible')
    cy.contains(`Paid $0.00`).should('be.visible')
    cy.url().should('include', '/transaction')
  })

  it('CT005-PG Enviar valor negativo', () => {
    // Arrange
    const negativeAmount = generateAmount(-1,-1000)
    cy.visit('http://localhost:3000')
    cy.login(users.validUser.username, users.validUser.password)

    // Act
    cy.get('[data-test="nav-top-new-transaction"]').click()

    cy.get('[data-test="user-list-search-input"]').type(users.friendList.friend1)
    cy.contains(users.friendList.friend1).click()

    cy.get('[name="amount"]').type(negativeAmount.toString())
    cy.get('.MuiInputBase-root > [name="description"]').type('Over Payment')
    cy.get('[data-test="transaction-create-submit-payment"]').click()

    // Assert
    cy.contains('Amount must be greater than zero').should('be.visible')
    cy.get('[data-test="transaction-create-submit-payment"]').should('be.disabled')
    //Payment allows negative amount and instead, increases sender balance
    cy.url().should('include', '/transaction')
  })
})



