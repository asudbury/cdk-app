import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkAppStack extends cdk.Stack {
/**
 * Constructor for the CdkAppStack class.
 *
 * @param scope The parent Construct for this stack.
 * @param id The logical ID of the stack.
 * @param props (optional) Initialization properties for the stack.
 */
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    const queue = new sqs.Queue(this, 'CdkAppQueue', {
       visibilityTimeout: cdk.Duration.seconds(300),
       queueName: 'berty' // Set the name of the queue to 'berty'
    });
  }
}
