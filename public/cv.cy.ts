import { APP_API } from './../../src/app/config/app-api.config';

describe('CvTech', () => {
  it('Visits Cv page', () => {
    cy.visit('/cv');
  });
  it('should not show card at the start of the component abd show the list of cvs', () => {
    cy.intercept(APP_API.cv, { fixture: 'cvs' });
    cy.visit('/cv');
    cy.get('[data-cy=cvCard]').should('not.exist');
    cy.get('[data-cy=cvList]').children().first().contains('Aymen');
    cy.get('[data-cy=cvList]').children().first().click();
    cy.get('[data-cy=cvCard]');
    cy.intercept(APP_API.cv + 1, { fixture: 'cv1' });
    cy.get('[data-cy=cvCardBtn]').click({ force: true });
  });
  // it('should show the card after click', () => {
  //   cy.visit('/cv');
  //   cy.get('[data-cy=cvCard]').should('not.exist');
  // });
});
