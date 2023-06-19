'use strict';

describe('Adding/removing elements', () => {
  before(() => {
    cy.visit('http://the-internet.herokuapp.com/');
  });

  it('must add and remove elements', () => {
    cy.contains('Add/Remove Elements').click();

    cy.get('h3').should('have.text', 'Add/Remove Elements');

    for (let i = 0; i < 5; i++) {
      cy.contains('Add Element').click();
    }

    cy.get('.added-manually').should('have.length', 5);

    cy.get('.added-manually').eq(4).click();
    cy.get('.added-manually').eq(3).click();

    cy.get('.added-manually').should('have.length', 3);
  });
});
