describe('Register account', () => {
  it.only('should register account', () => {
    cy.request({
      method: 'POST',
      url: '/users',
      body: {
        firstName: 'Natalia',
        lastName: 'Chmiel',
        username: 'NataliaC',
        password: 'password',
        confirmPassword: 'password',
      },
    }).then(response => {
      expect(response.status).to.eq(201);
    });
  });
});
