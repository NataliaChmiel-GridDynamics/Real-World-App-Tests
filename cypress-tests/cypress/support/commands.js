// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { faker } from '@faker-js/faker';

Cypress.Commands.add('login', (userName, password) => {
  cy.get('#username').type(userName);
  cy.get('#password').type(password);
  cy.get('[data-test=signin-submit]').click();
});

Cypress.Commands.add('registerNewUser', () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const username = faker.internet.userName();
  const password = faker.internet.password();
  const confirmPassword = password;

  const bankName = 'Bank Name';
  const routingNumber = 123456789;
  const accountNumber = 987654321;

  //should click sign up
  cy.get('a[data-test="signup"]').click();

  //should fill sign up form
  cy.get('input[name="firstName"]').type(firstName);
  cy.get('input[name="lastName"]').type(lastName);
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('input[name="confirmPassword"]').type(confirmPassword);

  //should click sign up submit button
  cy.get('button[data-test="signup-submit"]').click();

  //should sign in form be visible
  cy.get('button[data-test="signin-submit"]').should('exist');

  //should fill up sign in form
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[data-test="signin-submit"]').click();

  //should onboarding title be visible
  cy.get('button[data-test="user-onboarding-next"]').should('exist').click();

  //should fill bank account form
  cy.get('input[name="bankName"]').type(bankName);
  cy.get('input[name="routingNumber"]').type(routingNumber);
  cy.get('input[name="accountNumber"]').type(accountNumber);

  //should click submit button
  cy.get('button[data-test="bankaccount-submit"]').click();

  //should click next button
  cy.get('button[data-test="user-onboarding-next"]').click();
});

Cypress.Commands.add('fillAccSettings', bankName => {
  const phoneNumber = faker.phone.number('#########');
  const email = faker.internet.email();

  cy.get('input[data-test="user-settings-email-input"]').type(email);
  cy.get('input[data-test="user-settings-phoneNumber-input"]').type(phoneNumber);
});

Cypress.Commands.add('fillBankAccForm', bankName => {
  const routingNumber = 123456789;
  const accountNumber = 987654321;

  cy.get('input[name="bankName"]').type(bankName);
  cy.get('input[name="routingNumber"]').type(routingNumber);
  cy.get('input[name="accountNumber"]').type(accountNumber);
});

Cypress.Commands.add('fillPaymentDetails', (paymentAmount, paymentDescription) => {
  cy.get('input[name=amount]').type(paymentAmount);
  cy.get('input[name=description]').type(paymentDescription);
});

Cypress.Commands.add('loginRequest', (userName, password) => {
  cy.request({
    method: 'POST',
    url: '/login',
    body: {
      username: userName,
      password: password,
      type: 'LOGIN',
    },
    failOnStatusCode: false,
  });
});
