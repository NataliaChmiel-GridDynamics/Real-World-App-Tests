describe('Request transaction', () => {
  let users;

  before(() => {
    cy.fixture('users').then(data => {
      users = data;
    });
  });

  beforeEach(() => {
    cy.loginRequest(users.testuser.username, users.testuser.password);
  });

  it.only('should request transaction', () => {
    cy.request({
      method: 'POST',
      url: '/transactions',
      body: {
        transactionType: 'request',
        amount: '123',
        description: 'Transaction description.',
        senderId: 'F4ParWfBP',
        receiverId: 't45AiwidW',
      },
    }).then(response => {
      expect(response.status).to.eq(200);
    });
  });
});
