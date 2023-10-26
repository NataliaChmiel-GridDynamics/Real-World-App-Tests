describe('Should submit payment transaction', () => {
  let users;
  const paymentAmount = 123;
  const paymentDescription = 'Payment description';

  before(() => {
    cy.fixture('users').then(data => {
      users = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should submit payment transaction', function () {
    cy.login(users.testuser.username, users.testuser.password);
    cy.get('[data-test=sidenav-username]').should('exist').contains(users.testuser.username);

    //should click new button
    cy.get('[data-test=nav-top-new-transaction]').click();

    //should click contact
    cy.get('[data-test=users-list]').children().first().find('img').click({ force: true });

    //should fill new payment form
    cy.fillPaymentDetails(paymentAmount, paymentDescription);
    cy.get('[data-test=transaction-create-submit-request]').click();

    //should see confirm of request
    cy.contains('h2', paymentAmount, paymentDescription).should('exist');
  });
});
