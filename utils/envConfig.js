const dotenv = require('dotenv');
import path from 'path';
const env = process.env.ENV || 'qa';
const testData = require(`../test_data/appData.${env}.json`)

dotenv.config({
    path: path.resolve(process.cwd(), '.env'),
    override: true,
});

const envConfig = {
    data: testData,
    baseurl: testData.BASE_URL,
    username: process.env.USERNAME,
    password: process.env.PASSWORD
};

module.exports = envConfig;