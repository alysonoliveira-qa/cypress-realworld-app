describe('Login com sucesso', () => {
  it('CT001-LG Deve logar com um usuário válido', () => {
    // Usuário possui acesso ao sistema e está na pagina de Login
    cy.visit('http://localhost:3000')
    cy.get('[data-test="signin-username"] input').type('Heath93')
    cy.get('[data-test="signin-password"] input').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.contains('paid').should('be.visible')
  });
});