# Overview
This is a playwright suite for saucedemo.com web page accroding the [requirements](REQUIREMENTS.md)

# Documentation
please see [Docs](docs/index.html)

# Preconditions
Please be sure you have nodejs and npm correctly installed and in the path or environment variables

# Setup
- clone the repository by `git clone https://github.com/spsch/buhtas.git`
- run `npm i -d` or `npm install` to get all dependencies (`-d` should not break your other dep's)

# Running the tests
- using script `npm test-ui` will get you into Playwright UI mode - most recommended way
- run `npm run e2e` for runnning only e2e tests, it will open Playwright UI console where is possible to see all necessary outputs
- run `npx playwright test` for running all tests
- report will open automaticaly or you can run `npx playwright show-report`
- it is also possible to run the tests in Docker image (see the Dockerfile)
- for locators check please run `npm run locators-check` - this will open base URL with PW locators and assertions assistent

# Configuration
- all needed configs are done in playwright config file
- only chromium is set up as default browser
- there is authentication script for running the tests, for more see [Playwright Auth](https://playwright.dev/docs/auth)

# Test Documentation

## Authentication

The web apllication requires to be logged in with one of the provided users; instead having a before() and after() structure, which may affect e2e 
tests I have used a PW authentication file. For every test a routine is runned which will obtain a token and save it into [authuser.json](.auth/authuser.json).
Once the time out is reached, this routine must be called again.

## Test Structure

**Page Object** - all pages used for tests are described as independent objects in [pageObjects](pageObjects). They are exported in time of the test run and can be instantiated.

**Test Data** - products and users are saved in [testData](testData); for more flexibility or DDD it is possible to add any items and those can be imported as modules into desired test.

**Locators** - to bring more clarity into a structure, locators are separated at [locators](locators) (for every used page) as they are frequently matter of change.

**E2E** - End to end scenarios are saved here.

**Test Results** - Report itself for whole runs are stored in [Playwright Report](playwright-report) and for invidiual tests in [Test Results](test-results)

**Test Configuration** - described in [PW Configuration file](playwright.config.ts)

## Test Scenarios

First is e2e test which describes:
- log in
- go to product page
- see the prodcut's detail
- add the product in the cart
- see the cart
- proceed to checkout

Second are in tests folder and describe:
- [basic check that base URL is accesible - smoke test](tests/basicPwFuncSmokeTest.spec.ts)
- [scenario for successful log in](tests/login.spec.ts)
- [scenario for unsuccessful log in](tests/loginfail.spec.ts)
- [scenario for checking product detail](tests/productDetail.spec.ts) and [product page](tests/products.spec.ts)
- [scenario for checking cart page](tests/cart.spec.ts)
- [routine for reading users from JSON file](tests/readJsonFileTest.spec.ts)

## Test Priority

It is possible to run every test isolated in any order or run e2e suite


# License
- see LICENSE file
--------------------------------------------------------------------------------------------------------------------------------------------------------------