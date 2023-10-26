const { test, expect } = require('@playwright/test');
const { authroizedApiTest } = require('./utils');

// test.beforeAll(async ({ playwright, request }) => {
//   await loggedInUserApiContext(playwright, request, testUser);
// });

// test('should get contacts', async ({ request }) => {
//   const contactsResponse = await request.get('/users');
//   let data = await contactsResponse.json();

//   expect(contactsResponse.ok()).toBeTruthy();
//   expect(data.results).toBeDefined();
// });

authroizedApiTest('should get contacts', async ({ authroizedRequest }) => {
  const contactsResponse = await authroizedRequest.get('/users');
  let data = await contactsResponse.json();

  expect(contactsResponse.ok()).toBeTruthy();
  expect(data.results).toBeDefined();
});
