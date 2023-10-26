describe('Add comment to transaction', () => {
  let users;

  before(() => {
    cy.fixture('users').then(data => {
      users = data;
    });
  });

  beforeEach(() => {
    cy.loginRequest(users.testuser.username, users.testuser.password);
  });

  it.only('should add comment to transaction', () => {
    cy.request({
      method: 'POST',
      url: '/comments/0Hl6LF0Im',
      body: { transactionId: '0Hl6LF0Im', content: 'comment' },
    }).then(response => {
      expect(response.status).to.eq(200);
    });
  });
});
