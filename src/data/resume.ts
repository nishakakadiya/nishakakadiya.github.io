export const profile = {
  name: 'Nisha Kakadiya',
  role: 'Software Developer',
  tagline: 'Building polished, accessible React experiences and scalable backend systems.',
  summary:
    'Experienced full-stack developer with 4+ years delivering web apps using React, TypeScript, Node.js, Redux, and CI/CD pipelines. I build intuitive, accessible interfaces, reusable design systems, and secure RESTful backends for high-impact user journeys.',
  email: 'nisha.kakadiya09@gmail.com',
  phone: '+61 435 005 255',
  location: 'Melbourne, Australia',
  github: 'https://github.com/nishakakadiya',
  linkedin: 'https://linkedin.com/in/nisha-kakadiya',
  education: {
    institution: 'Gujarat Technological University',
    degree: 'Bachelor of Engineering in Computer Engineering',
    dates: 'Aug 2018 – May 2022',
    gpa: '9.27 / 10',
  },
  skills: [
    'React.js',
    'React Native',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Redux',
    'Material UI',
    'Ant Design',
    'Storybook',
    'Web Accessibility',
    'MongoDB',
    'Docker',
    'Jenkins',
    'Azure',
  ],
  softSkills: [
    'Communication',
    'Teamwork',
    'Problem Solving',
    'Adaptability',
    'Time Management',
    'Collaboration',
  ],
  experience: [
    {
      role: 'Senior Software Developer',
      company: 'WebOsmotic Private Limited',
      dates: 'Jan 2022 – Apr 2025',
      details: [
        'Engineered RESTful APIs with Node.js to improve backend performance by 20%.',
        'Built reusable React components using Storybook, Redux, and hooks.',
        'Applied Cypress and Jest testing to reduce production defects by 30%.',
        'Automated deployments using Jenkins CI/CD for faster, reliable releases.',
      ],
    },
    {
      role: 'Junior Software Developer',
      company: 'iGeek',
      dates: 'Apr 2021 – Nov 2021',
      details: [
        'Created an invoice management system using React, Node.js, and MongoDB.',
        'Integrated Stripe for subscription billing and generated automated reports.',
        'Deployed backend services on GCP with Docker and Jenkins.',
        'Implemented Agile workflows and streamlined CICD pipelines.',
      ],
    },
    {
      role: 'Web Developer Intern',
      company: 'The Sparks Foundation',
      dates: 'Apr 2021 – May 2021',
      details: [
        'Built a POS app with React Native, MongoDB, and InfluxDB.',
        'Added JWT authentication and Stripe-based payment flows.',
        'Improved efficiency through unit testing and agile delivery.',
      ],
    },
  ],
  projects: [
    {
      name: 'Coables - Online Therapy Platform',
      summary:
        'A React + TypeScript therapy portal with booking flows, video calls, and analytics dashboards.',
      links: [
        { label: 'Web', url: 'https://www.coables.com' },
        { label: 'App Store', url: 'https://apps.apple.com/in/app/coables/id6544796262' },
      ],
      highlights: [
        'Integrated VideoSDK for secure real-time appointments.',
        'Built dashboard charts with eCharts for reliable insights.',
        'Connected Razorpay for seamless payment processing.',
      ],
    },
    {
      name: 'Online POS System',
      summary:
        'A merchant dashboard for product management, invoicing, and recurring payments on app.paid.com.',
      links: [{ label: 'Web', url: 'https://app.paid.com' }],
      highlights: [
        'Implemented JWT authentication and role-based access control.',
        'Automated transaction batching using Bull job manager.',
        'Delivered multi-language support with i18Next and real-time updates via Socket.io.',
      ],
    },
    {
      name: 'Accessibility Widget Suite',
      summary:
        'A configurable accessibility widget set designed to improve web usability and digital inclusion.',
      highlights: [
        'Built screen reader support, multiple contrast ratio views, customizable cursors, and partial screen reading.',
        'Improved digital inclusion for users with varying visual and motor abilities.',
        'Delivered a lightweight, easy-to-integrate widget toolkit for accessible web experiences.',
      ],
    },
    {
      name: 'Ocean Tech CRM',
      summary: 'A CRM application built with React and Node for customer relationship and sales workflows.',
      links: [{ label: 'Live App', url: 'https://crm.oceantechnolab.com/' }],
      highlights: [
        'Created the CRM frontend in React and the backend in Node.js.',
        'Designed sales, support, and analytics workflows for efficient user onboarding.',
        'Delivered secure authentication, REST APIs, and responsive UI flows.',
      ],
    },
    {
      name: 'React Storybook Design System',
      summary:
        'A reusable UI component library with Storybook documentation and full test coverage.',
      highlights: [
        'Developed 20+ components in TypeScript with accessibility-first patterns.',
        'Achieved comprehensive unit and snapshot tests using Jest.',
        'Enforced consistent styling with ESLint and accessibility guidelines.',
      ],
    },
  ],
}
