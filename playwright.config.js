// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// dotenv.config({
//   // path: path.resolve(__dirname, `./configs/.env.${process.env.ENV}`),
//   path: path.resolve(process.cwd(), '.env'),
//   override: true,
// });
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir:  './tests',
  // ENV: process.env.ENV || 'qa',
  // testDir:  './tests/Regression Suite',
   /* Run tests in files in parallel */
  fullyParallel: true,
  workers: process.env.CI ? 3 : undefined,
  timeout: 40 * 1000,
  expect: {
    timeout: 10000
  },
  reporter:[
    ['html'],
    ['allure-playwright']
  ],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
 use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    // browserName: 'chromium',
    headless: true,
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

