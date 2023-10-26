const { test, expect } = require('@playwright/test');
const { testUser } = require('../../data/users');
const { loggedInUserApiContext } = require('../../utilities/apiUtilities');
const { authroizedApiTest } = require('./utils');

authroizedApiTest('should delete bank account', async ({ authroizedRequest }) => {
  const deleteRequest = await authroizedRequest.delete('/bankAccounts/gPATVeOzs');
  expect(deleteRequest.ok()).toBeTruthy();
});
