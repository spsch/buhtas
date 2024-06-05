FROM mcr.microsoft.com/playwright:v1.44.1-jammy

WORKDIR /app

COPY package.json /app/
COPY tests/ /app/tests/
COPY tests/e2e/ /app/tests/e2e/
COPY testData/ /app/testData
COPY locators /app/locators
COPY pageObjects/ /app/pageObjects
COPY playwright.config.ts /app/

RUN npm install