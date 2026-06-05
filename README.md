# Playwright Notes

1)	To Initialize node project in playwright structure use below cmd,it will initialize project and install all dependencies.
npm init playwright@latest


npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

    ---------------.env for different environments-----------
    $env:ENV="QA"; npx playwright test FirstTest.Spec.js 



•	Javascript is asynchronous, it won’t execute the script sequentially, that’s why we use await keyword before each line of code

•	test('first playwright test', async ({ browser }) => {


test('first playwright test', async ({ page }) => {
use curly braces so that it will recognize as playwright fixtures, in above lines {browser} and { page }, page and browser and page are playwright fixtures 



Committing the files to Git for the first time then run below commands.
git config --global user.email you@example.com”
git config --global user.name "Your Name"

