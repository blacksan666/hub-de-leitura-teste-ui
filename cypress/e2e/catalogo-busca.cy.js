/// <reference types="cypress"/>

import livros from '../fixtures/livros.json'

describe('Funcionalidade: Catálogo e Busca', () => {

    beforeEach(() => {
        cy.visit('catalog.html');
    });

    it('Deve fazer a busca do livro 1984 com sucesso', () => {
        cy.get('#search-input').type('1984');
        cy.get('.card-title > .text-dark').should('contain', '1984');

    });

    it('Deve fazer a busca de um livro da massa de dados', () => {
        cy.get('#search-input').type(livros[0].titulo);
        cy.get('.card-title > .text-dark').should('contain', livros[0].titulo);

    });

});