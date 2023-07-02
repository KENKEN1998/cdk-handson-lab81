import { Environment } from 'aws-cdk-lib';

export interface AppParameter {
  env?: Environment;
  envName: string;
  s3BucketName: string;
}

// Example for Development
export const devParameter: AppParameter = {
  envName: 'Development',
  env: { account: '123456789012', region: 'ap-northeast-1' },
  s3BucketName: 'thinhbt-dev-s3-bucket',
};

// Example for Staging
export const stagParameter: AppParameter = {
  envName: 'Staging',
  env: { account: '123456789012', region: 'ap-southeast-2' },
  s3BucketName: 'thinhbt-stg-s3-bucket',
};

// Example for Pipeline Deployment
export const prodParameter: AppParameter = {
  envName: 'Production',
  env: { account: '123456789012', region: 'ap-northeast-1' },
  s3BucketName: 'thinhbt-prod-s3-bucket',
};