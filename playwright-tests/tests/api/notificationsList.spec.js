const { expect } = require('@playwright/test');
const { authroizedApiTest } = require('./utils');

authroizedApiTest('should get notifications list', async ({ authroizedRequest }) => {
  const notificationsResponse = await authroizedRequest.get('/notifications');
  let data = await notificationsResponse.json();

  expect(notificationsResponse.ok()).toBeTruthy();
  expect(data.results).toBeDefined();
});
