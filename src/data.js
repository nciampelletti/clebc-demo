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
