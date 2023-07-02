#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { devParameter } from '../parameter';
import { S3StackProps, S3Stack} from '../lib/s3-stack';

const app = new cdk.App();

const s3StackProps : S3StackProps = {
  s3BucketName : devParameter.s3BucketName,
  env: {
    account: devParameter.env?.account || process.env.CDK_DEFAULT_ACCOUNT,
    region: devParameter.env?.region || process.env.CDK_DEFAULT_REGION,
  },
  tags: {
    Project: 'sample-cdk',
    Environment: devParameter.envName,
  },
}

