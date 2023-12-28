const { expect } = require('@playwright/test');
const { testUser } = require('../../data/users');
const { authroizedApiTest } = require('./utils');

authroizedApiTest('should get users list', async ({ authroizedRequest }) => {
  const usersResponse = await authroizedRequest.get('/users', {
    data: {
      username: testUser.username,
      password: testUser.password,
    },
  });
  let data = await usersResponse.json();

  expect(usersResponse.ok()).toBeTruthy();
  expect(data.results).toBeDefined();
});
