import { Project } from '../types/project'

const projects: Project[] = [
  {
    slug: 'campusXchange',
    title: 'campusXchange',
    description: 'Ecommerce platform for college students',
    category: 'Web',
    tags: ['TypeScript', 'NextJS', 'Sanity'],
    isExternalUrl: true,
    url: 'https://github.com/thesayantandey',
    logo: '/images/projects/campusXchange/logo.jpg',
    pin: true,
  },
  {
    slug: 'FitHack',
    title: 'FitHack',
    description: 'An Online Fitness Assistant Tool',
    category: 'Web',
    tags: ['JavaScript', 'Mediapipe', 'MongoDB'],
    isExternalUrl: true,
    url: 'https://github.com/ShekharHans/FitHack',
    logo: '/images/projects/fitHack/logo.jpg'
  },
  // {
  //   slug: 'thrace',
  //   title: 'Thrace',
  //   description: 'Comprehensive blockchain visual explorer and doxxing tool',
  //   category: 'Web3',
  //   tags: ['TypeScript', 'React.js', 'GraphQL'],
  //   url: 'https://discord.gg/GQk8RPfEPG',
  //   isExternalUrl: true,
  //   logo: '/images/projects/thrace/logo.png',
  // },
]

export default projects
