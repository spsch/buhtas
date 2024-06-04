import test from "@playwright/test"
import testusers from "../testData/testUsers.json"

test('Read JSON Values from file', async ({page}) => {
    console.log('Std user login name: ' + testusers[0].standard_user);
    console.log('Std usr pwd: ' + testusers[0].standard_user_pwd);
});

