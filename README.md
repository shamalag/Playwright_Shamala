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

.env -------------->
    In .env file
add ENV= qa/dev/prod/stage and give username and password for that environment. 
to run script from command line $env:ENV="qa"; npx playwright test ----> for powershell

    $env:ENV="qa"; npx playwright test FirstTest.Spec.js 

    in .env I have taken a ENV key which we can pass from command, that ENV is configured in envConfig.js under utils folder, in this envConfig.js file get the username and password from .env file and baseurl from appData.{ENV}.json file where I have stored test data as well. in envConfig.js file take a variable data where I ahve assigned this json obj.


Fixture files ------------>
  Created a test-fixture.js file where I have extended test fixture and added envConfig for use, so in test we can directly take env as fixture.






Committing the files to Git for the first time then run below commands.
git config --global user.email you@example.com”
git config --global user.name "Your Name"


Allure report:
npm install -D allure-playwright

