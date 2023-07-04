import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {aws_ec2 as ec2} from 'aws-cdk-lib';

export interface VpcStackProps extends StackProps {
  vpcName: string;
  vpcMaxAzs: number;
  vpcNatGateways: number;
  natGatewaySubnetCidr: number;
  ec2SubnetCidr: number;
  rdsSubnetCidr: number;
}

export class VpcStack extends Stack {
  constructor(scope: Construct, id: string, props: VpcStackProps) {
    super(scope, id, props);

    const subnetConfig: ec2.SubnetConfiguration[] = [
      {
        cidrMask: props.natGatewaySubnetCidr,
        name: "natGateway",
        subnetType: ec2.SubnetType.PUBLIC,
      },
      {
        cidrMask: props.ec2SubnetCidr,
        name: "ec2",
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
      },
      {
        cidrMask: props.rdsSubnetCidr,
        name: "rds",
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
      },
    ];

    const vpc = new ec2.Vpc(this, props.vpcName, {
      vpcName: props.vpcName,
      maxAzs: props.vpcMaxAzs,
      natGateways: props.vpcNatGateways,
      subnetConfiguration : subnetConfig,
    })
  }
}
