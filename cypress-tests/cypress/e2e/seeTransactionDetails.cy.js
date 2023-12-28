describe('Should see transactions details', () => {
  let users;

  before(() => {
    cy.fixture('users').then(data => {
      users = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should see transactions details', function () {
    cy.login(users.testuser.username, users.testuser.password);
    cy.get('[data-test=sidenav-username]').should('exist').contains(users.testuser.username);

    //should see transactions history
    cy.get('[data-test=transaction-list]').should('exist');

    //should see transactions details
    cy.get('[data-test=transaction-sender-_7SsQs9Cw]').click({ force: true });
    cy.get('[data-test=transaction-detail-header]').should('exist');
  });
});
