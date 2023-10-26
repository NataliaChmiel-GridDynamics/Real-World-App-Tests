describe('Should see account balance', () => {
  let users;

  before(() => {
    cy.fixture('users').then(data => {
      users = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should see account balance', function () {
    cy.login(users.testuser.username, users.testuser.password);
    cy.get('[data-test=sidenav-username]').should('exist').contains(users.testuser.username);

    //should see account balance
    cy.get('[data-test=sidenav-user-balance]').should('exist');
  });
});
