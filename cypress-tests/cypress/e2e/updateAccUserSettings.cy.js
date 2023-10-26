describe('Should update account user settings', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should update account user settings', function () {
    cy.registerNewUser();

    //should click my account side nav
    cy.get('a[data-test="sidenav-user-settings"]').click();

    //should fill my account settings
    cy.fillAccSettings();

    //should click save button
    cy.contains('span', 'Save').click();
  });
});
