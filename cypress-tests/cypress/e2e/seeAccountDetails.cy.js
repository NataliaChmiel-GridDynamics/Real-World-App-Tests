import { faker } from '@faker-js/faker';

describe('Should see account details', () => {

  let users;

  before(() => {
    cy.fixture('users').then(data => {
      users = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should see account details', function () {
    cy.login(users.testuser.username, users.testuser.password);
    cy.get('[data-test=sidenav-username]').should('exist').contains(users.testuser.username);

    //should see account details
    cy.contains('[data-test=sidenav-username]', users.testuser.username).should('exist');
  });
});
