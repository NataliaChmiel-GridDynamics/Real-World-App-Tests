describe('Users name list', () => {
    let users;
  
    before(() => {
      cy.fixture('users').then(data => {
        users = data;
      });
    });
  
    beforeEach(() => {
      cy.loginRequest(users.testuser.username, users.testuser.password);
    });
  
    it.only('should get users list', () => {
      cy.request({
        method: 'GET',
        url: `/users/profile/${users.testuser.username}`,
      }).then(response => {
        expect(response.status).to.eq(200);
      });
    });
  });
  