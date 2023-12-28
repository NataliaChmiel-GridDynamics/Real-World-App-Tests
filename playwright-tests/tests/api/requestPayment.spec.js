const { expect } = require('@playwright/test');
const { authroizedApiTest } = require('./utils');

authroizedApiTest('should request payment', async ({ authroizedRequest }) => {
  const requestResponse = await authroizedRequest.post('/transactions', {
    data: {
      transactionType: 'request',
      amount: '123',
      description: 'Transaction description.',
      senderId: 'F4ParWfBP',
      receiverId: 't45AiwidW',
    },
  });
  let data = await requestResponse.json();

  expect(requestResponse.ok()).toBeTruthy();
});
