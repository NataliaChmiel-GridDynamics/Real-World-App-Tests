const { expect } = require('@playwright/test');
const { authroizedApiTest } = require('./utils');

authroizedApiTest('should get bank acc list', async ({ authroizedRequest }) => {
  const bankAccResponse = await authroizedRequest.get('/bankAccounts');

  expect(bankAccResponse.ok()).toBeTruthy();
});
