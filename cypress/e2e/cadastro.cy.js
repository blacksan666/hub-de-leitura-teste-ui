/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page';

describe('Funcionalidade: Cadastro de hub de leitura', () => {

    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro()
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

    it('Deve preencher o formulário de cadastro usando faker', () => {
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

    it('Deve fazer cadastro usando page object', () => {
        cadastroPage.preecherCadastro(
            'Willian Sieben',
            'willian.sieben@outlook.com',
            '1234567890',
            'SenhaSegura123!',
            'SenhaSegura123!')
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer cadastro usando page object + faker', () => {
        let name = faker.person.fullName()
        let email = faker.internet.email()
        let phone = faker.phone.number()
        cadastroPage.preecherCadastro(
            name,
            email,
            phone,
            'SenhaSegura123!',
            'SenhaSegura123!')
        cy.url().should('include', 'dashboard')
    });

    it.only('Deve validar mensagem de erro ao não preencher campo nome', () => {
        let email = faker.internet.email()
        cadastroPage.preecherCadastro(
            '',
            email,
            '1234567890',
            'SenhaSegura123!',
            'SenhaSegura123!')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')

    });

}); 