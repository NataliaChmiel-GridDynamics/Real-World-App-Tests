const { expect } = require('@playwright/test');
const { authroizedApiTest } = require('./utils');

authroizedApiTest('should add comment to transaction', async ({ authroizedRequest }) => {
  const addComment = await authroizedRequest.post('/comments/183VHWyuQMS', {
    data: {
      transactionId: '183VHWyuQMS',
      content: 'comment',
    },
  });
  expect(addComment.ok()).toBeTruthy();
});
