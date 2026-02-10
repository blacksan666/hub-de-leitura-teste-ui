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

    it('Deve fazer a busca de um livro da massa de dados usando fixture', () => {
        cy.fixture('livros').then((catalogo) => {
            // mesmo código do teste anterior, mas usando a variável 'catalogo' para acessar os dados da fixture
            cy.get('#search-input').type(catalogo[0].titulo);
            cy.get('.card-title > .text-dark').should('contain', catalogo[0].titulo);
        })
    });

    it('Deve validar todos os titulos da lista', () => {
        cy.fixture('livros').then((catalogo) => {
            catalogo.forEach(item => {
                cy.get('#search-input').clear().type(item.titulo)
                cy.get('.card-title').should('contain', item.titulo)
            })
        })
    });

    it('Deve validar todos os autores da lista', () => {
        cy.fixture('livros').then((catalogo) => {
            catalogo.forEach(item => {
                cy.get('#search-input').clear().type(item.autor)
                cy.get('.mb-1').should('contain', item.autor)
            })
        })
    });

    it('Deve validar todos os generos da lista', () => {
        cy.fixture('livros').then((catalogo) => {
            catalogo.forEach(item => {
                cy.get('#search-input').clear().type(item.genero)
                cy.get('.mb-2').should('contain', item.genero)
            })
        })
    });

});