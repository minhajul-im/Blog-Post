import img1 from '../assets/nicout-filter.jpg';
import img2 from '../assets/save-money.jpg';
import img3 from '../assets/lab-test.jpg';

import {
  FacebookIcon,
  XIcon,
  LinkedinIcon,
  InstagramIcon,
  PhoneIcon,
  EmailIcon,
  LocationIcon,
} from '../icons';

export type LINK = { title: string; targetId: string };

export const LINKS: LINK[] = [
  {
    title: 'Home',
    targetId: 'hero',
  },
  {
    title: 'Shop',
    targetId: 'shop',
  },
  {
    title: 'About',
    targetId: 'about',
  },
  {
    title: 'Contact',
    targetId: 'contact',
  },
  {
    title: 'FAQ',
    targetId: 'faq',
  },
];

export type FEATURE = { title: string; desc: string; img: string };

export const FEATURES: FEATURE[] = [
  {
    title: 'Innovative Design',
    desc: `Our own "Easy Draw" 8-Hole Filter Design is effective and unique.`,
    img: img1,
  },
  {
    title: 'Efficient and Economical',
    desc: `One of the most Economical and Effective Smoking Cessation Methods.`,
    img: img2,
  },
  {
    title: 'Lab Tested',
    desc: `Nic Out removes 90% of the Tar as shown by Independent Lab Tests (1)`,
    img: img3,
  },
];

export const SOCIALS = [FacebookIcon, XIcon, LinkedinIcon, InstagramIcon];
export const SOCIAL_LINKS = ['#', '#', '#', '#'];

export const CONTACT = [
  '+880 1*01 1** ***',
  'example@gmail.com',
  'Dhaka, Bangladesh!',
];
export const CONTACT_ICONS = [PhoneIcon, EmailIcon, LocationIcon];
