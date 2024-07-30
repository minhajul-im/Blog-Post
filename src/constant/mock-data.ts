import img1 from '../assets/nicout-filter.jpg';
import img2 from '../assets/save-money.jpg';
import img3 from '../assets/lab-test.jpg';
import img4 from '../assets/nic-out1.jpg';
import img5 from '../assets/nic-out2.jpg';
import img6 from '../assets/nic-out3.jpg';

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

export type FaqType = {
  question: string;
  answer: string;
};

export const FAQ_DATA: FaqType[] = [
  {
    question: 'Getting started is easy! Sign up an?',
    answer: `Getting started is easy! Sign up for an ?, and you'll have access to our platform's features. No credit card required for the initial signup.`,
  },
  {
    question: 'Getting started easy! n ?',
    answer: `Getting started is easy! Sign up for an ?, and you'll have access to our platform's features. No credit card required for the initial signup.`,
  },
  {
    question: 'Getting d is easy! Sign up for an ?',
    answer: `Getting started is easy! Sign up for an ?, and you'll have access to our platform's features. No credit card required for the initial signup.`,
  },
];

const DESC: string[] = [
  `Filters remove over 90% of the tar and reduce nicotine!`,
  `A smoker does not detect any changes in the taste of the cigarette since the method used is mechanical smoke purification!`,
  `One Filter is good for 4 to 5 Cigarettes, one pack contains 30 filters!`,
  `Nic Out makes cigarettes less harmful and much easier to break your addiction to Nicotine completely!`,
];

export type ProductType = {
  id: number;
  name: string;
  img: string;
  pis: string;
  price: string;
  desc: string[];
};

export const PRODUCTS: ProductType[] = [
  {
    id: 1,
    name: 'Filters for Cigarette Smokers!',
    img: img4,
    pis: '1 Pack = 30 Filters!',
    desc: DESC,
    price: '700.00',
  },
  {
    id: 2,
    name: 'Smoking Free Tar & Nicotine Disposable Nicout Holders for Smokers',
    pis: '3 Packs = 90 Filters!',
    img: img5,
    desc: DESC,
    price: '2000.00',
  },
  {
    id: 3,
    name: 'Removes The Tar Not The Taste - Reusable Cigarette Filter Tips for Regular & Light Cigarettes!',
    img: img6,
    pis: '5 Packs = 150 Filters!',
    desc: DESC,
    price: '3300.00',
  },
];
