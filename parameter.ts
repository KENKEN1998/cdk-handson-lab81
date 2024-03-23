import { Environment } from 'aws-cdk-lib';

export interface AppParameter {
  env?: Environment;
  envName: string;
  s3BucketName: string;
  
  //vpc
  vpcName?: string;
  vpcMaxAzs?: number;
  vpcNatGateways?: number;
  natGatewaySubnetCidr? : number;
  ec2SubnetCidr?: number;
  rdsSubnetCidr?: number;
}

// Example for Develop Development
export const devParameter: AppParameter = {
  envName: 'Development',
  env: { account: '123456789012', region: 'ap-northeast-1' },
  s3BucketName: 'thinhbt-dev-s3-bucket',
  //vpc
  vpcName: 'lab81-proj-vpc',
  vpcMaxAzs: 2,
  vpcNatGateways: 1,
  natGatewaySubnetCidr: 24,
  ec2SubnetCidr: 24,
  rdsSubnetCidr: 24,
  
};

// Example for Staging Development
export const stagParameter: AppParameter = {
  envName: 'Staging',
  env: { account: '123456789012', region: 'ap-southeast-2' },
  s3BucketName: 'thinhbt-stg-s3-bucket',
};

// Example for Product Deployment
export const prodParameter: AppParameter = {
  envName: 'Production',
  env: { account: '123456789012', region: 'ap-northeast-1' },
  s3BucketName: 'thinhbt-prod-s3-bucket',
};