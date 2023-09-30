/// <reference types="cypress" />

describe('Home page', ()=> {
    context('Navigation', ()=> {
        it('Renders Logo', () => {
            cy.visit('http://localhost:3000/')
            cy.get('.nav-logo').should('have.text', 'Weather app')
        });
    })
})