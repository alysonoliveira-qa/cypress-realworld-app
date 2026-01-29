describe('Login com sucesso', () => {
  it('CT001-LG Deve logar com um usuário válido', () => {
    // Usuário possui acesso ao sistema e está na pagina de Login
    cy.visit('http://localhost:3000')
    cy.get('[data-test="signin-username"] input').type('Heath93')
    cy.get('[data-test="signin-password"] input').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="sidenav"]').should('be.visible')
  });
});

describe('Tentar fazer login com credenciais inválidas', () => {
  it.only('CT002-LG Login com username não cadastrado', () => {
    // Usuário possui acesso ao sistema e está na pagina de Login
    cy.visit('http://localhost:3000')
    // Preenche username não cadastrado
    cy.get('[data-test="signin-username"] input').type('username-invalido')
    //Preenche senha não cadastrada
    cy.get('[data-test="signin-password"] input').type('senha-inválida')
    cy.get('[data-test="signin-submit"]').click()
    //mensagem de erro aparece
    cy.contains('Username or password is invalid').should('be.visible')
    //Verifica que esta na tela de Login
    cy.url().should('include', '/signin')
  });
});