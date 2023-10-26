const { test, expect } = require('@playwright/test');
const { authroizedApiTest } = require('./utils');

authroizedApiTest('should add comment to transaction', async ({ authroizedRequest }) => {
  const deleteRequest = await authroizedRequest.post('/comments/0Hl6LF0Im', {
    data: {
      transactionId: '0Hl6LF0Im',
      content: 'comment',
    },
  });
  expect(deleteRequest.ok()).toBeTruthy();
});
