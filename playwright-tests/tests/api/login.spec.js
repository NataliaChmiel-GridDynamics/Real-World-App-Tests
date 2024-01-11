const { test, expect } = require('@playwright/test');
const { testUser, nonExistingUser } = require('../../data/users');

test('should log in', async ({ request }) => {
  const loginResponse = await request.post('/login', {
    data: {
      username: testUser.username,
      password: testUser.password,
      type: 'LOGIN',
    },
  });
  expect(loginResponse.ok()).toBeTruthy();
  const responseBody = await loginResponse.json();
  expect(responseBody).toEqual({
    user: {
      avatar: 'https://cypress-realworld-app-svgs.s3.amazonaws.com/t45AiwidW.svg',
      balance: 168137,
      createdAt: '2019-08-27T23:47:05.637Z',
      defaultPrivacyLevel: 'public',
      email: 'Norene39@yahoo.com',
      firstName: 'Edgar',
      id: 't45AiwidW',
      lastName: 'Johns',
      modifiedAt: '2020-05-21T11:02:22.857Z',
      password: '$2a$10$5PXHGtcsckWtAprT5/JmluhR13f16BL8SIGhvAKNP.Dhxkt69FfzW',
      phoneNumber: '625-316-9882',
      username: 'Katharina_Bernier',
      uuid: '6383f84e-b511-44c5-a835-3ece1d781fa8',
    },
  });
});

test('should fail log in on invalid credentials', async ({ request }) => {
  const loginResponse = await request.post('/login', {
    data: {
      username: nonExistingUser.username,
      password: nonExistingUser.password,
      type: 'LOGIN',
    },
  });
  expect(loginResponse.ok()).toBeFalsy();
});
