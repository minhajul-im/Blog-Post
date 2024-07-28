import img1 from '../assets/nicout-filter.jpg';
import img2 from '../assets/save-money.jpg';
import img3 from '../assets/lab-test.jpg';

export type LINK = { title: string; targetId: string };

export const LINKS: LINK[] = [
  {
    title: 'Home',
    targetId: 'hero',
  },
  {
    title: 'Products',
    targetId: 'products',
  },
  {
    title: 'About',
    targetId: 'about',
  },
  {
    title: 'Reviews',
    targetId: 'reviews',
  },
  {
    title: 'Contact',
    targetId: 'contact',
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
