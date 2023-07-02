import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {aws_s3 as s3} from 'aws-cdk-lib';

export interface S3StackProps extends StackProps {
  s3BucketName: string;
}

export class S3Stack extends Stack {
  constructor(scope: Construct, id: string, props?: S3StackProps) {
    super(scope, id, props);

    const s3Bucket = new s3.Bucket(this, 'MyBucket',{
      bucketName: props?.s3BucketName,
    })
  }
}
