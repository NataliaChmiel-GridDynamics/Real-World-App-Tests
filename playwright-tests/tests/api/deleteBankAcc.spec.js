const { expect } = require('@playwright/test');
const { authroizedApiTest } = require('./utils');

authroizedApiTest('should delete bank account', async ({ authroizedRequest }) => {
  const deleteRequest = await authroizedRequest.delete('/bankAccounts/gPATVeOzs');
  expect(deleteRequest.ok()).toBeTruthy();
});
