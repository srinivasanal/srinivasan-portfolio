export const profile = {
  name: 'SRINIVASAN',
  displayName: 'Srinivasan',
  title: 'Cloud & DevOps Engineer',
  intro:
    'Building reliable cloud infrastructure, automating deployments, and exploring innovative technology solutions.',
  objective:
    'Aspiring Cloud and DevOps Engineer with a strong interest in building reliable systems and improving deployment processes. Ready to apply my practical knowledge to real-world projects, solve technical challenges, and continue developing my skills in cloud infrastructure and automation.',
  email: 'alsrinivasanal@gmail.com',
  phone: '+91 88259 28671',
  phoneHref: 'tel:+918825928671',
  linkedin: 'https://linkedin.com/in/srinivasan-alagusundaram',
  github: 'https://github.com/srinivasanal',
  resumePath: '/resume.pdf',
  focusAreas: [
    'Cloud Computing',
    'DevOps Engineering',
    'AWS Infrastructure',
    'Linux Administration',
    'CI/CD Automation',
    'Database Migration',
    'Cloud Deployment'
  ],
  verifiedStats: [
    { label: 'Hands-On Projects', value: '5', detail: '4 Cloud/DevOps + 1 AI/ML' },
    { label: 'Industry Internships', value: '3', detail: '8 Months Combined' },
    { label: 'Certifications', value: '3', detail: 'Cloud, DevOps & Networking' },
    { label: 'B.E. CSE CGPA', value: '7.6', detail: 'Class of 2026' }
  ]
};

export const skillCategories = [
  {
    id: 'cloud',
    title: 'Cloud Computing',
    icon: 'Cloud',
    accent: 'from-[#2563EB] to-[#22D3EE]',
    items: ['AWS EC2', 'S3', 'RDS', 'VPC', 'DMS', 'Elastic Load Balancing (ELB)', 'IAM']
  },
  {
    id: 'devops',
    title: 'DevOps',
    icon: 'Workflow',
    accent: 'from-[#22D3EE] to-[#2563EB]',
    items: ['Git', 'GitHub', 'Jenkins', 'Maven', 'Docker', 'Ansible', 'Kubernetes']
  },
  {
    id: 'os',
    title: 'Operating Systems',
    icon: 'Terminal',
    accent: 'from-[#1D4ED8] to-[#22D3EE]',
    items: [
      'Linux',
      'User and Group Management',
      'File Permissions',
      'Package Management',
      'System Services',
      'Performance Monitoring'
    ]
  },
  {
    id: 'scripting',
    title: 'Programming & Scripting',
    icon: 'Code2',
    accent: 'from-[#2563EB] to-[#38BDF8]',
    items: ['Python', 'Shell Scripting']
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'Database',
    accent: 'from-[#0EA5E9] to-[#2563EB]',
    items: ['MySQL', 'MariaDB']
  },
  {
    id: 'tools',
    title: 'Technical Tools',
    icon: 'Wrench',
    accent: 'from-[#2563EB] to-[#22D3EE]',
    items: ['VS Code', 'PuTTY', 'WinSCP', 'Microsoft Planner']
  },
  {
    id: 'ai',
    title: 'AI Tools',
    icon: 'Sparkles',
    accent: 'from-[#22D3EE] to-[#3B82F6]',
    items: [
      'Claude',
      'ChatGPT',
      'Microsoft Copilot',
      'Gemini',
      'Replit',
      'Google Colab',
      'Grammarly',
      'Perplexity',
      'Canva AI',
      'GitHub Copilot',
      'Gamma'
    ]
  }
];

export const cloudProjects = [
  {
    id: 'ec2-to-rds',
    title: 'EC2 to RDS Database Migration',
    category: 'Cloud Infrastructure & Migration',
    image: `${import.meta.env.BASE_URL}images/project-rds-migration.svg`,
    technologies: ['Amazon EC2', 'Amazon RDS', 'AWS VPC', 'AWS DMS'],
    shortDescription:
      "Migrated the project database from EC2 to RDS and updated the application's database connection. Also performed database migration using AWS DMS.",
    highlights: [
      "Migrated the project database from EC2 to RDS and updated the application's database connection.",
      'Migrated a database of similar engines using DMS Migration service (AWS DMS).'
    ],
    architectureSummary:
      'Transitioned a self-managed EC2 database workload into Amazon RDS inside a configured AWS VPC, pairing direct connection cutover with AWS Database Migration Service (DMS) replication.',
    githubUrl: null,
    demoUrl: null
  },
  {
    id: 'onprem-to-aws',
    title: 'On-Premises Project Migration to AWS',
    category: 'Cloud Migration',
    image: `${import.meta.env.BASE_URL}images/project-onprem-aws.svg`,
    technologies: ['Amazon EC2', 'AWS VPC', 'Nginx'],
    shortDescription:
      'Moved a locally hosted application to AWS and configured its cloud environment.',
    highlights: [
      'Moved the locally hosted application to AWS and configured its cloud environment.'
    ],
    architectureSummary:
      'Provisioned Amazon EC2 compute inside a custom AWS VPC and configured Nginx to serve the migrated application cleanly in the cloud.',
    githubUrl: null,
    demoUrl: null
  },
  {
    id: 'cicd-pipeline',
    title: 'Cloud and DevOps Pipeline',
    category: 'CI/CD Automation',
    image: `${import.meta.env.BASE_URL}images/project-cicd-pipeline.svg`,
    technologies: ['Git', 'GitHub', 'Jenkins'],
    shortDescription:
      'Created a CI/CD pipeline to automate project build and deployment.',
    highlights: [
      "Created a CI/CD pipeline to automate the project's build and deployment."
    ],
    architectureSummary:
      'Connected Git and GitHub source repositories to Jenkins to automate build execution and deployment stages with repeatable delivery.',
    githubUrl: null,
    demoUrl: null
  },
  {
    id: 'three-tier-aws',
    title: 'Three-Tier AWS Deployment with Load Balancer',
    category: 'High-Availability Architecture',
    image: `${import.meta.env.BASE_URL}images/project-three-tier.svg`,
    technologies: ['Amazon EC2', 'Application Load Balancer', 'Amazon RDS', 'AWS VPC', 'Nginx'],
    shortDescription:
      'Deployed an application using separate web, application and database tiers, with a load balancer routing incoming traffic.',
    highlights: [
      'Deployed the project on AWS with separate web, application, and database tiers, and configured a load balancer to route incoming traffic.'
    ],
    architectureSummary:
      'Architected a segmented AWS VPC separating Nginx web servers, Amazon EC2 application logic, and Amazon RDS data storage behind an Application Load Balancer.',
    githubUrl: null,
    demoUrl: null
  }
];

export const aiFeaturedProject = {
  id: 'ai-freshness-detection',
  title: 'AI-Based Freshness Detection for Fruits and Vegetables',
  badge: 'Featured Final-Year AI/ML Project',
  category: 'Computer Vision & Full-Stack ML',
  image: `${import.meta.env.BASE_URL}images/project-ai-freshness.svg`,
  technologies: ['Python', 'PyTorch', 'CNN', 'MobileNetV2', 'FastAPI', 'React'],
  shortDescription:
    'Developed an image-based system to classify fruits and vegetables as fresh or rotten, estimate shelf life and display useful food information.',
  highlights: [
    'Developed an image-based system to classify fruits and vegetables as fresh or rotten.',
    'Estimated shelf life and displayed useful food information.'
  ],
  architectureSummary:
    'Combines a PyTorch MobileNetV2 convolutional neural network served via FastAPI with an interactive React interface for real-time produce freshness classification and shelf-life estimation.',
  githubUrl: null,
  demoUrl: null
};

export const internships = [
  {
    id: 'qubinex',
    role: 'Cloud Computing & DevOps Intern',
    company: 'Qubinex Smart IT Solutions',
    year: '2026',
    duration: '6 Months',
    responsibilities: [
      'Gained hands-on experience with AWS cloud services, Linux administration, Docker containerization, and cloud infrastructure management.',
      'Developed an understanding of CI/CD pipelines, automated deployment workflows, system troubleshooting, and DevOps practices.'
    ]
  },
  {
    id: 'shahar',
    role: 'Cloud Computing Intern',
    company: 'Shahar Technologies (OPC) Private Limited',
    year: '2025',
    duration: '1 Month',
    responsibilities: [
      'Developed a foundational understanding of cloud computing concepts, cloud services, infrastructure components, and deployment models.',
      'Gained practical exposure to cloud resource management, application hosting, and cloud deployment techniques.'
    ]
  },
  {
    id: 'bsnl',
    role: 'Networking Intern',
    company: 'Bharat Sanchar Nigam Limited (BSNL)',
    year: '2022',
    duration: '1 Month',
    responsibilities: [
      'Developed an understanding of computer networking fundamentals, including network topologies, IP addressing, network protocols, and data communication.',
      'Gained exposure to network infrastructure, basic troubleshooting techniques, and the fundamentals of network connectivity, communication systems, and network operations.'
    ]
  }
];

export const certifications = [
  {
    id: 'acte',
    title: 'Cloud Computing & DevOps',
    subtitle: '3-Month Training Certificate',
    issuer: 'ACTE Technologies, Bangalore',
    year: '2026'
  },
  {
    id: 'shahar-cert',
    title: 'Cloud Computing',
    subtitle: '1-Month Internship Certificate',
    issuer: 'Shahar Technologies (OPC) Pvt. Ltd., Madurai',
    year: '2025'
  },
  {
    id: 'bsnl-cert',
    title: 'Networking',
    subtitle: '1-Month Internship Certificate',
    issuer: 'Bharat Sanchar Nigam Limited (BSNL)',
    year: '2022'
  }
];

export const education = [
  {
    id: 'be',
    degree: 'B.E. in Computer Science and Engineering',
    institution: 'University College of Engineering (BIT Campus)',
    year: '2026',
    score: 'CGPA: 7.6'
  },
  {
    id: 'diploma',
    degree: 'Diploma in Computer Science and Engineering',
    institution: 'Alagappa Government Polytechnic College',
    year: '2023',
    score: '87%'
  },
  {
    id: 'sslc',
    degree: 'SSLC',
    institution: 'Maharishi Vidya Mandir Matriculation Higher Secondary School',
    year: '2020',
    score: '92%'
  }
];
