const { expect } = require('@playwright/test');
const { testUser } = require('../../data/users');

const { authroizedApiTest } = require('./utils');

authroizedApiTest('should create transaction payment', async ({ authroizedRequest }) => {
  const paymentResponse = await authroizedRequest.post('/transactions', {
    data: {
      amount: '100',
      description: 'description',
      receiverId: 'qywYp6hS0U',
      senderId: testUser.id,
      transactionType: 'payment',
    },
  });
  expect(paymentResponse.ok()).toBeTruthy();
});
