#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CloudStack } from '../lib/cloud-stack';

const app = new cdk.App();
new CloudStack(app, 'CloudStack', {
  CertificateArn: 'arn:aws:iot:eu-west-1:257510624659:cert/9977ec2ae6d5faad1b4a4349f04374524a73c9104ea5b49b833c515dc76c4ddf',
  ThingName: 'Camera1',
});