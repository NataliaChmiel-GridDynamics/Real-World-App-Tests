describe('Should like and comment transaction', () => {
  let users;
  const transactionComment = 'Transaction Comment';

  before(() => {
    cy.fixture('users').then(data => {
      users = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should like and comment transaction', function () {
    cy.login(users.testuser.username, users.testuser.password);
    cy.get('[data-test=sidenav-username]').should('exist').contains(users.testuser.username);

    //should see transactions history
    cy.get('[data-test=transaction-list]').should('exist');

    //should see transactions details
    cy.get('[data-test=transaction-sender-_7SsQs9Cw]').click({ force: true });
    cy.get('[data-test=transaction-detail-header]').should('exist');

    //should like transaction
    cy.get('[data-test=transaction-like-button-_7SsQs9Cw]').click({ force: true });

    //should comment transaction
    cy.get('input[data-test=transaction-comment-input-_7SsQs9Cw]')
      .type(transactionComment)
      .type('{enter}');

    //should see added comment
    cy.contains('[data-test=comments-list]', transactionComment).should('exist');
  });
});
