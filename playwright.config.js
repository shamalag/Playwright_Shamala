// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, `./configs/.env.${process.env.ENV}`),
  override: true,

  // path: path.resolve(__dirname, `./configs/.env.${process.env.ENV}`)
});
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir:  './tests',
  // testDir:  './tests/Regression Suite',
   /* Run tests in files in parallel */
  fullyParallel: true,
  workers: process.env.CI ? 1 : undefined,
  timeout: 40 * 1000,
  expect: {
    timeout: 10000
  },
  reporter: 'html',
 use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    // browserName: 'chromium',
    // headless: false,
    //  channel: 'chromium',
    //  trace: 'on',
  },


  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
  ],
});

