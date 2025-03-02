import { expect, test } from '@playwright/test';

test.describe('Login Page Tests', () => {
  
  test('Navigate to Login Page', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await expect(page).toHaveURL('http://localhost:5173/login');
  });

  test('Check if login inputs are functional', async ({ page }) => {
    await page.goto('http://localhost:5173/login');

    await page.getByRole('textbox', { name: 'Enter your email' }).fill('pratik@gmail.com');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('pratik');

    await expect(page.getByRole('textbox', { name: 'Enter your email' })).toHaveValue('pratik@gmail.com');
    await expect(page.getByRole('textbox', { name: 'Enter your password' })).toHaveValue('pratik');
  });

  test('Check if the Login button exists and is clickable', async ({ page }) => {
    await page.goto('http://localhost:5173/login');

    const loginButton = page.getByRole('button', { name: 'Login' });
    
    // Ensure the login button is visible and enabled
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();

    // Click the login button
    await loginButton.click();
  });

  test('Perform login action', async ({ page }) => {
    await page.goto('http://localhost:5173/login');

    await page.getByRole('textbox', { name: 'Enter your email' }).fill('pratik@gmail.com');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('pratik');
    await page.getByRole('button', { name: 'Login' }).click();

    // Ensure the "Welcome Back!" heading is visible after login
    await expect(page.getByRole('heading', { name: 'Welcome Back!' })).toBeVisible();
  });

  test('Check "Remember me" and "Forgot password?" functionality', async ({ page }) => {
    await page.goto('http://localhost:5173/login');

    await page.getByPlaceholder('Enter your email').fill('pratik@gmail.com');
    await page.getByPlaceholder('Enter your password').fill('pratik');

    await page.getByText('Remember me').click();
    await page.getByText('Forgot password?').click();
  });

});
