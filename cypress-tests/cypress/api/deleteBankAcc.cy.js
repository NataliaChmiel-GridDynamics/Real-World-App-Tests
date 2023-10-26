describe('Delete bank account', () => {
  let users;

  before(() => {
    cy.fixture('users').then(data => {
      users = data;
    });
  });

  beforeEach(() => {
    cy.loginRequest(users.testuser.username, users.testuser.password);
  });

  it.only('should delete bank account', () => {
    cy.request({
      method: 'DELETE',
      url: '/bankAccounts/gPATVeOzs',
    }).then(response => {
      expect(response.status).to.eq(200);
    });
  });
});
