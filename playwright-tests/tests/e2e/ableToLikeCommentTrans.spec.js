// @ts-check
const { test, expect } = require('@playwright/test');
const { testUser } = require('../../data/users');
const { LoginPage } = require('../../pages/LoginPage');
const { MyAccountPage } = require('../../pages/MyAccountPage');
const { LikeCommentTrans } = require('../../pages/LikeCommentTrans');

test('should like and comment transaction', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
  const myAccountPage = new MyAccountPage(page);
  await expect(myAccountPage.userName).toHaveText(`@${testUser.username}`);

  //should like and comment transaction
  const transActions = new LikeCommentTrans(page);
  const transComment = 'Transaction Comment';

  await expect(transActions.transactionHistory).toBeVisible();
  await transActions.transactionSender.click();
  await expect(transActions.transactionDetailHeader).toBeVisible();
  await transActions.transactionLikeBtn.click();
  await transActions.transactionCommentBtn.fill(transComment);
  await transActions.transactionCommentBtn.press('Enter');
  await expect(transActions.transactionAddedComment).toBeVisible();
});
