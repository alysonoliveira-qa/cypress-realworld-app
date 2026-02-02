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
  it('CT002-LG Login com username não cadastrado', () => {
    // Usuário possui acesso ao sistema e está na pagina de Login
    cy.visit('http://localhost:3000')
    // Preenche username não cadastrado
    cy.get('[data-test="signin-username"] input').type('username-invalido')
    //Preenche senha inválida
    cy.get('[data-test="signin-password"] input').type('senha-inválida')
    cy.get('[data-test="signin-submit"]').click()
    //mensagem de erro aparece
    cy.contains('Username or password is invalid').should('be.visible')
    //Verifica que esta na tela de Login
    cy.url().should('include', '/signin')
  });

   it('CT003-LG Login com username válido e senha inválida', () => {
    // Usuário possui acesso ao sistema e está na pagina de Login
    cy.visit('http://localhost:3000')
    cy.get('[data-test="signin-username"] input').type('Heath93')
    cy.get('[data-test="signin-password"] input').type('senha-inválida')
    cy.get('[data-test="signin-submit"]').click()
    cy.contains('Username or password is invalid').should('be.visible')
    cy.url().should('include', '/signin')
  });

  it('CT004-LG Login com username inválido e senha válida', () => {
    // Usuário possui acesso ao sistema e está na pagina de Login
    cy.visit('http://localhost:3000')
    cy.get('[data-test="signin-username"] input').type('username-invalido')
    cy.get('[data-test="signin-password"] input').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.contains('Username or password is invalid').should('be.visible')
    cy.url().should('include', '/signin')
  });

  it('CT005-LG Login sem preencher username', () => {
    // Usuário possui acesso ao sistema e está na pagina de Login
    cy.visit('http://localhost:3000')
    // Não preenche o username
    cy.get('[data-test="signin-password"] input').type('s3cret')
    cy.get('[data-test="signin-submit"]').should('be.disabled')
    cy.contains('Username is required').should('be.visible')
    cy.url().should('include', '/signin')
  });

  it('CT006-LG Login sem preencher senha', () => {
    // Usuário possui acesso ao sistema e está na pagina de Login
    cy.visit('http://localhost:3000')
    cy.get('[data-test="signin-username"] input').type('Heath93')
    // Não preenche a senha
    cy.get('[data-test="signin-submit"]').should('be.disabled')
    //Validaçao comentada pois a UX não mostra mensagem de validação para o campo Password.
    //cy.contains('Password is required').should('be.visible')
    cy.url().should('include', '/signin')
  });

  it('CT007-LG Deve acessar a página de cadastro a partir do Login', () => {
  // Usuário possui acesso ao sistema e está na página de Login
  cy.visit('http://localhost:3000')
  cy.contains('Sign Up').click()
  // Verifica redirecionamento
  cy.url().should('include', '/signup')
  // Confirma que está na tela de cadastro
  cy.contains('Sign Up').should('be.visible')
  });
   
});