import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faFeather } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons/faPeopleArrows'
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons'

import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

import Course1 from './images/course-1.avif'
import Course2 from './images/course-2.avif'
import Course3 from './images/course-3.avif'

import Practice1 from './images/practice-1.avif'
import Practice2 from './images/practice-2.avif'
import Practice3 from './images/practice-3.avif'

import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaGithubSquare,
} from 'react-icons/fa'
import { nanoid } from 'nanoid'

//image, name, icon, description
export const practice = [
  {
    image: Practice1,
    name: 'Business Law',
    icon: faBriefcase,
    description:
      'Business law encompasses everything from how to start, buy, manage, close, or sell a business, which is why advising businesses can sometimes be overwhelming.',
  },

  {
    image: Practice3,
    name: 'Family Law',
    icon: faPeopleRoof,
    description:
      'The practice of family law is constantly evolving as society moves towards new social structures, relationships, and technologies. ',
  },
  {
    image: Practice2,
    name: 'Dispute',
    icon: faPeopleArrows,
    description:
      'In modern practice, clients expect lawyers not only to be skilled in adversarial advocacy, but also in the dispute resolution processes of negotiation, mediation, and arbitration.',
  },
  // {
  //   image: Practice4,
  //   name: 'Other',
  //   icon: faScaleBalanced,
  //   description:
  //     'Being a lawyer in the modern marketplace often involves serving clients with legal issues outside of the most common areas of practice. ',
  // },
]
export const areas = [
  {
    icon: faBookOpenReader,
    title: 'Course Calendar',
    text: '12 months of CLEBC courses at your fingertips!',
  },
  {
    icon: faFeather,
    title: 'Publications',
    text: 'See all of our publications at our online store.',
  },
  {
    icon: faNewspaper,
    title: 'EMAIL SIGN UP',
    text: 'Never miss an upcoming CLEBC course, updated publication!',
  },
  {
    icon: faHandHoldingHeart,
    title: 'Contributors',
    text: 'We appreciate our volunteer contributors!',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
]

export const courses = [
  {
    image: Course1,
    name: 'Family Law Mediation Fundamentals',
    date: 'January 22, 2024',
  },
  {
    image: Course2,
    name: 'Robert’s Rules and Responsible Governance',
    date: 'January 24, 2024',
  },
  {
    image: Course3,
    name: 'Intermediate Family Law Mediation',
    date: 'January 26, 2024',
  },
]

const subLinks = [
  {
    pageId: nanoid(),
    page: 'Our Products',
    links: [
      {
        id: nanoid(),
        label: 'Courses Calendar',
        icon: <Fa500Px />,
        url: '/product/coursescalendar',
      },
      {
        id: nanoid(),
        label: 'Courses List',
        icon: <FaAccusoft />,
        url: '/product/coursescalendar',
      },
      {
        id: nanoid(),
        label: 'Publications',
        icon: <FaAdversal />,
        url: '/product/publications',
      },
    ],
  },
  {
    pageId: nanoid(),
    page: 'CLE Online',
    links: [
      {
        id: nanoid(),
        label: 'Login',
        icon: <FaAvianex />,
        url: '/cleonline/login',
      },
      {
        id: nanoid(),
        label: 'courses on demand',
        icon: <FaBitcoin />,
        url: '/cleonline/coursesondemand',
      },
      {
        id: nanoid(),
        label: 'Online Practice Manuals',
        icon: <FaBtc />,
        url: '/cleonline/online manuals',
      },
      {
        id: nanoid(),
        label: 'Advocacy Toolkit',
        icon: <FaCodiepie />,
        url: '/cleonline/advocacytoolkit',
      },
      {
        id: nanoid(),
        label: 'CLEBC Precendent Collection',
        icon: <FaAccusoft />,
        url: '/cleonline/precendentcollection',
      },
      {
        id: nanoid(),
        label: 'Case Digest Connection',
        icon: <FaAdversal />,
        url: '/cleonline/casedigest',
      },
    ],
  },
  {
    pageId: nanoid(),
    page: 'News and Resources',
    links: [
      {
        id: nanoid(),
        icon: <FaAdversal />,
        label: 'Business Law Resources',
        url: '/news-and-resources/business-law-resources',
      },
      {
        id: nanoid(),
        label: 'Dispute Resolution',
        icon: <FaAccusoft />,
        url: '/news-and-resources/dispute-resolution',
      },
      {
        id: nanoid(),
        icon: <FaAvianex />,
        label: 'Family Law Resources',
        url: '/news-and-resources/family-law-resources',
      },
      {
        id: nanoid(),
        icon: <FaBitcoin />,
        label: 'Litigation Resources',
        url: '/news-and-resources/litigation-resources',
      },
      {
        id: nanoid(),
        icon: <FaBtc />,
        label: 'Real Estate Law Resources',
        url: '/news-and-resources/real-estate-law-resources',
      },
      {
        id: nanoid(),
        icon: <FaAccusoft />,
        label: 'Skills and Practice Management Resources',
        url: '/news-and-resources/skills-and-practice-management-resources',
      },
      {
        id: nanoid(),
        icon: <FaCodiepie />,
        label: 'Wills, Estates and Trusts Resources',
        url: '/news-and-resources/wills-estates-and-trusts-resources',
      },
      {
        id: nanoid(),
        label: 'Other',
        icon: <FaDocker />,
        url: '/news-and-resources/other',
      },
    ],
  },
  {
    pageId: nanoid(),
    page: 'Contributors',
    links: [
      {
        id: nanoid(),
        label: 'In the Spotlight – Contributors',
        icon: <FaAvianex />,
        url: '/contributors/in-the-spotlight',
      },
      {
        id: nanoid(),
        label: 'Leaders in Learning',
        icon: <FaBitcoin />,
        url: '/contributors/leaders-in-learning',
      },
      {
        id: nanoid(),
        label: 'Rising Star Contributors',
        icon: <FaBtc />,
        url: '/contributors/rising-star-contributors',
      },
      {
        id: nanoid(),
        label: 'Most Prolific',
        icon: <FaCodiepie />,
        url: '/contributors/most-prolific',
      },
      {
        id: nanoid(),
        label: 'Contributor Support',
        icon: <FaAccusoft />,
        url: '/contributors/support',
      },
      {
        id: nanoid(),
        label: 'Contribute',
        icon: <FaGithubSquare />,
        url: '/contributors/contribute',
      },
    ],
  },
]

export default subLinks
