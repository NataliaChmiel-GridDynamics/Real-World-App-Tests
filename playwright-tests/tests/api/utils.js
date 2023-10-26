const { test } = require('@playwright/test');
const { testUser } = require('../../data/users');
const { loggedInUserApiContext } = require('../../utilities/apiUtilities');

exports.authroizedApiTest = test.extend({
  authroizedRequest: async ({ playwright, request }, use) => {
    const authroizedRequest = await loggedInUserApiContext(playwright, request, testUser);
    await use(authroizedRequest);
  },
});
