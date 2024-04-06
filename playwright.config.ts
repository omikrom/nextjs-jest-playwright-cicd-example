import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testMatch: ['**/spec_tests/**/*.spec.ts'], // Only match files ending with .spec.ts
  // Other Playwright configuration options
}

export default config
