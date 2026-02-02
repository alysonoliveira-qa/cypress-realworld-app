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

  it('CT002-SU - Tentar Cadastrar com todos os campos em branco', () => {
    // Arrange
    cy.visit('http://localhost:3000/signup')

    // Act
    // Não preencher nenhum campo
    cy.get('[data-test="signup-submit"]').click()

    // Assert
    //pagina deveria carregar com o botão "Sign Up" desabilitado
    //cy.get('[data-test="signup-submit"]').should('be.disabled')
    cy.contains('First Name is required').should('be.visible')
    cy.url().should('include','/signup')
  });

  it('CT003-SU - First Name em branco', () => {
    // Arrange
    const timestamp = Date.now()
    const username = `mystogan_oliveira_${timestamp}`

    cy.visit('http://localhost:3000/signup')

    // Act
    // Não preenche First Name
    cy.get('[data-test="signup-last-name"] input').type('Oliveira')
    cy.get('[data-test="signup-username"] input').type(username)
    cy.get('[data-test="signup-password"] input').type('s3cret')
    cy.get('[data-test="signup-confirmPassword"] input').type('s3cret')
    // Não clica em nada

    // Assert
    cy.contains('First Name is required').should('be.visible')
    cy.get('[data-test="signup-submit"]').should('be.disabled')
    cy.url().should('include','/signup')
  });

  it('CT004-SU - Last Name em branco', () => {
    // Arrange
    const timestamp = Date.now()
    const username = `mystogan_oliveira_${timestamp}`

    cy.visit('http://localhost:3000/signup')

    // Act
    cy.get('[data-test="signup-first-name"] input').type('Mystogan')
    // Não preenche Last Name
    cy.get('[data-test="signup-username"] input').type(username)
    cy.get('[data-test="signup-password"] input').type('s3cret')
    cy.get('[data-test="signup-confirmPassword"] input').type('s3cret')
    // Não clica em nada

    // Assert
    // Mensagem de validação aparece apenas após blur do campo
    // Portanto validamos apenas o comportamento do formulário
    cy.get('[data-test="signup-submit"]').should('be.disabled')
    cy.url().should('include','/signup')
  });

  it('CT005-SU - Username em branco', () => {
    // Arrange
    cy.visit('http://localhost:3000/signup')

    // Act
    cy.get('[data-test="signup-first-name"] input').type('Mystogan')
    cy.get('[data-test="signup-last-name"] input').type('Oliveira')
    // Não preenche Username
    cy.get('[data-test="signup-password"] input').type('s3cret')
    cy.get('[data-test="signup-confirmPassword"] input').type('s3cret')
    cy.get('[data-test="signup-username"] input').click()

    // Assert
    // Mensagem de validação aparece apenas após blur do campo
    // Portanto validamos apenas o comportamento do formulário
    cy.get('[data-test="signup-submit"]').should('be.disabled')
    cy.url().should('include','/signup')
  });

  it('CT006-SU - Password em branco', () => {
    // Arrange
    const timestamp = Date.now()
    const username = `mystogan_oliveira_${timestamp}`

    cy.visit('http://localhost:3000/signup')

    // Act
    cy.get('[data-test="signup-first-name"] input').type('Mystogan')
    cy.get('[data-test="signup-last-name"] input').type('Oliveira')
    cy.get('[data-test="signup-username"] input').type(username)
    // Não preenche Password
    cy.get('[data-test="signup-confirmPassword"] input').type('s3cret')
    // Não clica em nada

    // Assert
    cy.contains('Password does not match').should('be.visible')
    cy.get('[data-test="signup-submit"]').should('be.disabled')
    cy.url().should('include','/signup')
  });

  it('CT007-SU - Confirm Password em branco', () => {
    // Arrange
    const timestamp = Date.now()
    const username = `mystogan_oliveira_${timestamp}`

    cy.visit('http://localhost:3000/signup')

    // Act
    cy.get('[data-test="signup-first-name"] input').type('Mystogan')
    cy.get('[data-test="signup-last-name"] input').type('Oliveira')
    cy.get('[data-test="signup-username"] input').type(username)
    cy.get('[data-test="signup-password"] input').type('s3cret')
    // Não preenche Confirm Password
    // Não clica em nada

    // Assert
    // Mensagem de validação aparece apenas após blur do campo
    // Portanto validamos apenas o comportamento do formulário
    cy.get('[data-test="signup-submit"]').should('be.disabled')
    cy.url().should('include','/signup')
  });

  it('CT008-SU - Password e Confirm Password diferentes', () => {
    // Arrange
    const timestamp = Date.now()
    const username = `mystogan_oliveira_${timestamp}`

    cy.visit('http://localhost:3000/signup')

    // Act
    cy.get('[data-test="signup-first-name"] input').type('Mystogan')
    cy.get('[data-test="signup-last-name"] input').type('Oliveira')
    cy.get('[data-test="signup-username"] input').type(username)
    cy.get('[data-test="signup-password"] input').type('s3cret')
    cy.get('[data-test="signup-confirmPassword"] input').type('s4cret')
    // Não clica em nada

    // Assert
    cy.contains('Password does not match').should('be.visible')
    cy.get('[data-test="signup-submit"]').should('be.disabled')
    cy.url().should('include','/signup')
  });

  it('CT009-SU - Username já existente (regra não validade pelo sistema', () => {
    // Arrange
    const username = 'usuario_existente'
    cy.visit('http://localhost:3000/signup')

    // Act
    cy.get('[data-test="signup-first-name"] input').type('Mystogan')
    cy.get('[data-test="signup-last-name"] input').type('Oliveira')
    cy.get('[data-test="signup-username"] input').type(username)
    cy.get('[data-test="signup-password"] input').type('s3cret')
    cy.get('[data-test="signup-confirmPassword"] input').type('s3cret')
    cy.get('[data-test="signup-submit"]').click()

    // Assert
    /*
    * Observação:
    * A aplicação não valida unicidade de username no backend.
    * O cadastro é realizado com sucesso mesmo com username duplicado.
    * Caso documentado para visibilidade de regra de negócio ausente.
    */
    //cy.contains('Username already exists').should('be.visible')
    cy.url().should('not.include','/signup')
  });

  it('CT010-SU Deve acessar a página de Login a partir do Cadastro', () => {
  // Arrange
  cy.visit('http://localhost:3000/signup')

  // Act
  cy.contains('Sign In').click()
  // Assert
  cy.url().should('not.include', '/signup')
  cy.contains('Sign In').should('be.visible')
  });

});