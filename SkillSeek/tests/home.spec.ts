import { expect, test } from '@playwright/test';

test.describe('Homepage Tests', () => {

  test('Navigate to Home Page', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    await expect(page).toHaveURL('http://localhost:5173/home');
  });

 
  test('Click on Service Button', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    await page.getByText('Service', { exact: true }).click();
  });

  test('Click on About Button', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    await page.getByText('About').click();
  });

  test('Check Presence of SkillSeek Heading', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    await expect(page.getByText('SkillSeekYour trusted')).toBeVisible();
  });

  test('Click on Sign In Button', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    await page.getByRole('button', { name: 'Sign In' }).click();
  });

  test('Click on Sign Up Button', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    await page.getByRole('button', { name: 'Sign Up' }).click();
  });

  test('Check Specific Image Visibility', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    await expect(page.locator('img').nth(2)).toBeVisible();
  });

  test('Check Navigation Bar Contents', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    await expect(page.getByText('HomeServiceAboutSign InSign Up')).toBeVisible();
  });

});
