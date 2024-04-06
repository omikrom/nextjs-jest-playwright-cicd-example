import { test, expect } from '@playwright/test'

test('Opens the homepage and checks title', async ({ page }) => {
  // Navigate to your Next.js app's homepage URL (replace with your actual URL)
  await page.goto('http://localhost:3000/')

  // Expect the page title to match your app's title
  await expect(page).toHaveTitle(/Create Next App/) // Adjust the regex for your specific title
})
