# Overview
This is a playwright suite for saucedemo.com web page accroding the [requirements](REQUIREMENTS.md)

# Preconditions
Please be sure you have nodejs and npm correctly installed and in the path or environment variables

# Setup
- clone the repository by `git clone https://github.com/spsch/buhtas.git`
- run `npm i -d` or `npm install` to get all dependencies (`-d` should not break your other dep's)

# Running the tests
- using script `npm test-ui` will get you into Playwright UI mode - most recommended way
- run `npm e2e` for runnning only e2e tests
- run `npx playwright test` for running all tests
- report will open automaticaly or you can run `npx playwright show-report`
- it is also possible to run the tests in Docker image (see the Dockerfile)

# Configuration
- all needed configs are done in playwright config file
- only chromium is set up as default browser
- there is authentication script for running the tests, for more see [Playwright Auth](https://playwright.dev/docs/auth)

# License
- see LICENSE file