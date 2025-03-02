import { test, expect } from '@playwright/test';

test.describe('Service Page Tests', () => {

  test('Navigate to Service Page', async ({ page }) => {
    await page.goto('http://localhost:5173/service');
    await expect(page).toHaveURL('http://localhost:5173/service');
  });

  test('Check Main Heading "Find Services"', async ({ page }) => {
    await page.goto('http://localhost:5173/service');
    await expect(page.getByRole('heading', { level: 2, name: 'Find Services' })).toBeVisible();
  });

  // === Plumber Section ===
  test('Check Plumber Image Visibility', async ({ page }) => {
    await page.goto('http://localhost:5173/service');
    await expect(page.getByRole('img', { name: 'available plumber' })).toBeVisible();
  });

  test('Check Plumber Heading', async ({ page }) => {
    await page.goto('http://localhost:5173/service');
    await expect(page.getByRole('heading', { level: 3, name: 'available plumber' })).toBeVisible();
  });

  test('Check Plumber Description', async ({ page }) => {
    await page.goto('http://localhost:5173/service');
    await expect(page.getByText('install, maintain, and repair plumbing systems in residential, commercial, and industrial spaces.')).toBeVisible();
  });

 

  test('Click on Plumber "View More" Button', async ({ page }) => {
    await page.goto('http://localhost:5173/service');
    await page.getByRole('button', { name: 'View More' }).nth(0).click();
  });

  // === Carpenter Section ===
  test('Check Carpenter Image Visibility', async ({ page }) => {
    await page.goto('http://localhost:5173/service');
    await expect(page.getByRole('img', { name: 'Available Carpenter' })).toBeVisible();
  });

  test('Check Carpenter Heading', async ({ page }) => {
    await page.goto('http://localhost:5173/service');
    await expect(page.getByRole('heading', { level: 3, name: 'Available Carpenter' })).toBeVisible();
  });

  test('Check Carpenter Description', async ({ page }) => {
    await page.goto('http://localhost:5173/service');
    await expect(page.getByText('A carpenter is a craftsperson who builds and repairs structures using wood and other materials.')).toBeVisible();
  });

  

  test('Click on Carpenter "View More" Button', async ({ page }) => {
    await page.goto('http://localhost:5173/service');
    await page.getByRole('button', { name: 'View More' }).nth(1).click();
  });

  // === Cook Section ===
  test('Check Cook Image Visibility', async ({ page }) => {
    await page.goto('http://localhost:5173/service');
    await expect(page.getByRole('img', { name: 'Available Cook' })).toBeVisible();
  });

  test('Check Cook Heading', async ({ page }) => {
    await page.goto('http://localhost:5173/service');
    await expect(page.getByRole('heading', { level: 3, name: 'Available Cook' })).toBeVisible();
  });

  test('Check Cook Description', async ({ page }) => {
    await page.goto('http://localhost:5173/service');
    await expect(page.getByText('A cook prepares and cooks food, and may also clean and manage kitchen operations')).toBeVisible();
  });



  test('Click on Cook "View More" Button', async ({ page }) => {
    await page.goto('http://localhost:5173/service');
    await page.getByRole('button', { name: 'View More' }).nth(2).click();
  });

});
