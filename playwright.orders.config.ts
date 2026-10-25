import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', testMatch: 'orders.spec.ts', workers: 1,
  use: { baseURL: 'http://localhost:3002', headless: true, channel: 'chrome' },
  webServer: { command: 'npm run dev -- --port 3002', url: 'http://localhost:3002', reuseExistingServer: false },
  expect: { timeout: 15000 },
});
