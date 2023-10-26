describe('Should register a new account', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should register a new account', function () {
    cy.registerNewUser();
  });
});
