/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro de hub de leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve preencher o formulário de cadastro com sucesso', () => {
        let name = faker.person.fullName()
        let email = faker.internet.email()
        let phone = faker.phone.number()
        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#phone').type(phone)
        cy.get('#password').type('SenhaSegura123!')
        cy.get('#confirm-password').type('SenhaSegura123!')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //deve exibir mensagem de sucesso
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', name)
    });

    it('Deve preencher o formulário de cadastro usando comando customizado', () => {
        let name = faker.person.fullName()
        let email = faker.internet.email()
        let phone = faker.phone.number()
        cy.preencherCadastro(
            name,
            email,
            phone,
            'SenhaSegura123!',
            'SenhaSegura123!')
        //deve exibir mensagem de sucesso
        cy.url().should('include', 'dashboard')
    });

});