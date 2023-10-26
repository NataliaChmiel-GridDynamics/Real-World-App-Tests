describe('Should add new bank account', () => {
  const bankName = 'Bank Name';
  let users;

  before(() => {
    cy.fixture('users').then(data => {
      users = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should add new bank account', function () {
    cy.login(users.testuser.username, users.testuser.password);
    cy.get('[data-test=sidenav-username]').should('exist').contains(users.testuser.username);

    //should click bank account details
    cy.get('[data-test=sidenav-bankaccounts]').click();

    //should bank account details be visible
    cy.get('[data-test=bankaccount-list]').should('exist');

    //should create new bank account
    cy.get('[data-test=bankaccount-new]').click({ force: true });

    //should fill up bank account form
    cy.fillBankAccForm(bankName);

    //should click submit button
    cy.get('button[data-test=bankaccount-submit]').click();

    //should see new added bank account
    cy.contains('[data-test="bankaccount-list"]', bankName).should('exist');
  });
});
