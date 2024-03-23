import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {aws_route53 as route53} from 'aws-cdk-lib';
import {aws_route53_targets as route53Targets } from 'aws-cdk-lib';
import {aws_elasticloadbalancingv2 as elbv2} from 'aws-cdk-lib';

export interface Route53StackProps extends StackProps {
  albDnsName: string;
}

export class Route53Stack extends Stack {
  constructor(scope: Construct, id: string, props?: Route53StackProps) {
    super(scope, id, props);

    // Replace these with your domain name and ALB DNS name
    const domainName = 'lab81.bachthinh.link';
    const albDnsName = props?.albDnsName;

    // Create a hosted zone for your domain
    const zone = new route53.PublicHostedZone(this, 'MyHostedZone', {
      zoneName: domainName,
    });

    // Create a record set for the ALB
    new route53.ARecord(this, 'AliasRecord', {
      zone,
      target: route53.RecordTarget.fromAlias(new route53Targets.LoadBalancerTarget(
        elbv2.LoadBalancer.fromLookup(this, 'ALB', { dnsName: albDnsName })
      )),
    });
  }
}
