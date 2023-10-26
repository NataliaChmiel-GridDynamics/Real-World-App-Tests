const { test, expect } = require('@playwright/test');
const { authroizedApiTest } = require('./utils');

authroizedApiTest('should submit payment', async ({ authroizedRequest }) => {
  const submitResponse = await authroizedRequest.post('/transactions', {
    data: {
      transactionType: 'payment',
      amount: '123',
      description: 'Transaction description.',
      senderId: 'F4ParWfBP',
      receiverId: 't45AiwidW',
    },
  });
  let data = await submitResponse.json();

  expect(submitResponse.ok()).toBeTruthy();
});
