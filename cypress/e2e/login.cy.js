/// <reference types="cypress"/>

import usuario from '../fixtures/usuario.json'

describe('Funcionalidade: Login de usuário', () => {

    beforeEach(() => {
        cy.visit('login.html')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        //deve redirecionar para o dashboard
        cy.url().should('include', 'dashboard.html')
        cy.get('h4').should('contain', 'Olá, Usuário Padrão!')

    });

    it('Deve fazer login usando comando customizado', () => {
        cy.login('usuario@teste.com', 'user123')

    });

    it('Deve fazer login de adm usando comando customizado', () => {
        cy.login('admin@biblioteca.com', 'admin123')

    });

    it('Deve fazer login - utilizando importação de massa de dados', () => {
        cy.login(usuario.email, usuario.password)

    });

});