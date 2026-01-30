
describe('Funcionaliadade: Contato', () => {
   //este sera o primeiro teste
  beforeEach(() => {
    cy.visit('index.html')
  });

  it('Deve preencher o formulário de contato com sucesso', () => {
    cy.get('[name="name"]').type('Willian Sieben')
    cy.get('[name="email"]').type('willian.sieben@outlook.com')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Estou aprendendo Cypress e quero tirar algumas dúvidas.')
    cy.get('#btn-submit').click()
    //deve exibir mensagem de sucesso
    cy.contains('Contato enviado com sucesso!').should('exist')
    });
    
  it('Deve validar mensagem de erro ao enviar sem preencher nome', () => {
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('willian.sieben@outlook.com')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Estou aprendendo Cypress e quero tirar algumas dúvidas.')
    cy.get('#btn-submit').click()
    //deve exibir mensagem de erro para o campo nome
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher email', () => {
    cy.get('[name="name"]').type('Willian Sieben')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Estou aprendendo Cypress e quero tirar algumas dúvidas.')
    cy.get('#btn-submit').click()
    //deve exibir mensagem de erro para o campo email
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')
  });

  it('Deve validar mensagem de erro ao enviar sem selecionar assunto', () => {
    cy.get('[name="name"]').type('Willian Sieben')
    cy.get('[name="email"]').type('willian.sieben@outlook.com')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').clear()
    cy.get('#btn-submit').click()
    //deve exibir mensagem de erro para o campo assunto
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher a mensagem', () => {
    cy.get('[name="name"]').type('Willian Sieben')
    cy.get('[name="email"]').type('willian.sieben@outlook.com')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').clear()
    cy.get('#btn-submit').click()
    //deve exibir mensagem de erro para o campo mensagem
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')
  });
});