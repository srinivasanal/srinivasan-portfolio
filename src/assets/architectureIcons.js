export const INFRA_NODES = [
  { id: 'vpc', label: 'AWS VPC', pos: [0, 0.35, 0], color: '#22D3EE', size: 0.42 },
  { id: 'ec2', label: 'EC2', pos: [-1.75, 0.9, 0.55], color: '#2563EB', size: 0.32 },
  { id: 'rds', label: 'RDS', pos: [1.75, 0.85, 0.45], color: '#22D3EE', size: 0.32 },
  { id: 'elb', label: 'ALB', pos: [-1.45, -0.85, 0.8], color: '#38BDF8', size: 0.28 },
  { id: 'cicd', label: 'CI/CD', pos: [1.55, -0.8, 0.75], color: '#2563EB', size: 0.28 },
  { id: 'k8s', label: 'Docker/K8s', pos: [0, -1.25, -0.6], color: '#22D3EE', size: 0.3 }
];

export const INFRA_LINKS = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 5]
];
