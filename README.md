# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template


## CDK CLI Commands

```bash
# Install the AWS CDK CLI
npm install -g aws-cdk

# Initialize a new CDK project
cdk init app --language=typescript

# Bootstrap the AWS CDK Toolkit stack into an environment
cdk bootstrap aws://ACCOUNT-NUMBER-1/REGION-1

# Deploy the stack
cdk deploy

# Destroy the stack
cdk destroy
```

## Useful Links

* [AWS CDK Developer Guide](https://docs.aws.amazon.com/cdk/latest/guide/home.html)
* [AWS CDK API Reference](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html)









