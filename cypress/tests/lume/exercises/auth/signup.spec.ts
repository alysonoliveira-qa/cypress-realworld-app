describe('Sign Up - Registro de novo usuário com sucesso', () => {
  it('CT001-SU - Criar conta com dados válidos', () => {
    // Arrange
    const timestamp = Date.now()
    const username = `mystogan_oliveira_${timestamp}`

    cy.visit('http://localhost:3000/signup')

    // Act
    cy.get('[data-test="signup-first-name"] input').type('Mystogan')
    cy.get('[data-test="signup-last-name"] input').type('Oliveira')
    cy.get('[data-test="signup-username"] input').type(username)
    cy.get('[data-test="signup-password"] input').type('s3cret')
    cy.get('[data-test="signup-confirmPassword"] input').type('s3cret')

    cy.get('[data-test="signup-submit"]').click()

    // Assert
    cy.url().should('not.include','/signup')
    cy.get('[data-test="signup-submit"]').should('not.exist')
  });
});