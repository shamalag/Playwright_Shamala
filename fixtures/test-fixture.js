const base = require('@playwright/test');
const envConfig =require('../utils/envConfig');

exports.test = base.test.extend({
    env: async({}, use) =>{
        await use(envConfig);
    }
})
exports.expect = base.expect;