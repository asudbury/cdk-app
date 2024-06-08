import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkAppStack } from '../lib/cdk-app-stack';
import * as dotenv from 'dotenv';

dotenv.config();

const app = new cdk.App();

new CdkAppStack(app, 'CdkAppStack', {
  env: {
    account: process.env.AWS_ACCOUNT_ID,
    region: process.env.AWS_DEFAULT_REGION
  },
});
