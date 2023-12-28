const { expect } = require('@playwright/test');
const { authroizedApiTest } = require('./utils');

authroizedApiTest('should get user profile list', async ({ authroizedRequest }) => {
  const userProfileResponse = await authroizedRequest.get(`/users/profile/NChmiel`);

  expect(userProfileResponse.ok()).toBeTruthy();
});
