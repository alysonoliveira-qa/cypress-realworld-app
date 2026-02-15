describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('CT 002 - Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    // Implemente os passos do caso de teste aqui
    const newUser = {
      firstName: 'Test',
      lastName: 'User',
      username: `user${Date.now()}`,
      password: 's3cret'
    }

    // Arrange
    cy.signup(newUser)
    cy.login(newUser.username, newUser.password)
    cy.createBankAccount()

    // Act
    cy.get('[data-test="user-onboarding-next"]').click()
    cy.get('[data-test="nav-personal-tab"]').click()

    // Assert
    cy.contains('No Transactions').should('be.visible')
  });
});