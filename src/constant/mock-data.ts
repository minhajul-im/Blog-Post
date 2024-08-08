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

export const TITLE = `Filters remove over 90% of the tar and reduce nicotine!`;

export type FaqType = {
  question: string;
  answer: string;
};

export const FAQ_DATA: FaqType[] = [
  {
    question: 'What is Nic-Out?',
    answer: `It is a high performance health product. Disposable Cigarette Filter in the form of cigarette holder makes smoking safer or enables smoker to quit easier, if this option should have been chosen. It therefore allows individuals to secure their health for the lowest cost. Our Company is proud to offer you this revolutionary product, which could bring the answer to one of the bitterest modern problems, and prove as solution for a Healthier Nation.`,
  },
  {
    question: 'How does Nic-Out work?',
    answer: `The Nic-Out is a cigarette holder with mechanical filtering insert, which selectively absorbs from the smoke large molecules of the tar and other toxic and carcinogenic poly-nuclear aromatic compounds. The principle of action of the Nic-Out filter is based on the laws of behavior of gases in the jet engine and it was developed in a framework of space technologies. This mechanical device permits most low molecular weight species to pass through, although relatively lowering the amount of inhaled nicotine and thus diminishing cravings in those who want to quit.`,
  },
  {
    question: 'Where and how is it made?',
    answer: `Nic-Out filters for cigarette smoke cleansing are the Israeli development of 1999 (Patent Claim No. 151387). Overseas production facility supplies the filters made of plastic, designed and built to Nic-Out specifications. Our raw material is the same Grade-A plastic as commonly used for production of baby food bottles. The technology underlying the Nic-Out is patented in European Community and bears the Trade Mark registered in the United States.`,
  },
  {
    question: 'What are the advantages of Nic-Out?',
    answer: `Scientific and practical knowledge show that Nic-Out works effectively. It is made from transparent plastic and makes visible concentration of collected tar. This provides important psychological effect in order to build negative image of smoking consequences and to prevent further ruining of public health. Reduction of tar in cigarette smoke has also certain “cosmetic” action. The filter protects dental enamel from penetration of sticky tar, cease formation of a dental strike and helps to keep your smile snow-white. The immediate results of using the tiny device is the disappearance of the tormenting “morning cough” – usually a consequence of smoking over 15 cigarettes per day. After 2 weeks of using this filter the smokers are completely rid of the “morning cough”`,
  },
  {
    question: 'Who is the owner of the Nic-Out Filters?',
    answer: `Our Company (P.Service) is the exclusive proprietor of NIC-OUT cigarette filters. Currently major activities of the Company are concentrated on the goal of development healthier environment based on the most updated technologies and logistics.`,
  },
  {
    question: 'How many Cigarettes could be used with one Nic-Out filter?',
    answer: `Each Nic-Out filter is reusable and can be utilized with multiple cigarettes v usually 5 to 10 – until it completely filled up with the Tar.`,
  },
  {
    question: 'What is the Tar?',
    answer: `The tar is staining liquid that forms from burning cigarettes and known as carcinogen. When it is inhaled, the human body cells are in danger. You would be shocked to see how much of poison trapped in Nic-Out filter instead of your lungs with each cigarette.`,
  },
  {
    question: 'Is it harmless to use the Nic-Out Filter?',
    answer: `The plastic, which Nic-Out filters made of is the same kind as used in production of baby-food bottles. So, naturally, it is harmless to health, nontoxic and causes no allergy. Each Nic-Out filter is reusable and can be utilized with multiple cigarettes. It traps most of tar and some nicotine from the smoke. The transparent walls of the holder make it visible and very convincing.`,
  },
  {
    question: 'How does Nic-Out impact smoking habit?',
    answer: `People begin smoking cigarettes for a variety of reasons. Smoking has been portrayed as being heroic, cool and as enhancing sexual appeal. For some people, smoking also serves to soothe tension, anxiety, or loneliness. However, as is commonly known, cigarette smoke contains the addictive compound nicotine. Addiction to nicotine makes it very difficult for smokers to stop smoking cigarettes, even though many realize that smoking will adversely affect their health. The Nic-Out Filter is provided a method of making not just a safer smoking, but it creates the most adequate conditions for the smoker to start quitting. The lower level of Nicotine inhaled while using the Nic-Out lowers the cravings effect.`,
  },
  {
    question: 'What is a proof of Nic-Out effectiveness?',
    answer: `The most convincing result of Nic-Out utilization is relief of tormenting morning cough, experienced by the most aggressive smokers. No irritation in the lungs v no cough, since Nic-Out takes the tar out of smoke. It is so obvious, when the black substance is gradually collected after each cigarette and visualized through transparent walls of cigarette holder. Nic-Out Filter is extracting up to 90% of the Tar from cigarette smoke and substantially lowers the level of Nicotine. This fact is proved by testing at the prestigious ARISTA LABORATORIES located in the State of Virginia. Testing results show that smoking of Ultra Lights Marlboro with Nic-Out reduces the tar from 5.9 mg per cigarette to 0.12 mg per cigarette. Smoking regular Marlboro with Nic-Out brings the tar level down from 14.3 mg to 0.38 mg. Detailed Arista Lab-s Report may be presented on request of interested Parties.`,
  },
  {
    question: 'What is the role of regular filter at the tip of a cigarette?',
    answer: `The tobacco industry has attempted to alleviate the problems caused by poly-nuclear aromatics and cyanide by incorporating filters into cigarettes to remove these compounds when a smoker inhales. These filters are typically made of cellulose-based materials. The filters are effective in removing some of the toxic chemicals from tobacco smoke, but unfortunately a substantial amount still passes through the filter.`,
  },
  {
    question: 'Who are the users of Nic-Out Filters?',
    answer: `The Nic-Out creates the convenience of people of legal age who already smoke or are trying to cut down on smoking, or wish to have a better smoking experience. Nic-Out is capable to raise the quality of life with less health risks.`,
  },
];

export const ABOUT = [
  `Nic-out is a health product that has international success for smokers, with the highest level of performance in the market!`,
  `Nic-out is a portable filter in the form of a cigarette fairy that fits on the cigarette and reduces the damage caused by smoking by reducing and absorbing the toxins that are burned while burning the cigarette without compromising the smoker’s taste or consumption habits!`,
  `Its main function is to help the person who smokes get rid of breathing difficulties and to allow him to start the process of reducing/stopping smoking in a more lenient way!`,
  `The filter has been tested very carefully and is always in the process of supervising and upgrading the product in order to provide the customer with the maximum value for his money and health!`,
  `In a box of standard filters, there are 30 filters, In the box of SLIM & HAND ROLLING filters, there are 25 filters!`,
  `Each filter fits an average of 3-5 cigarettes. SLIM & HAND ROLLING Suitable for Slims, Super Slims, and Rollers with 6 and 5.3mm millimeter filter tips!`,
];

export const WORK = [
  `The inner filter allows only small particles of smoke with low molecular weight to pass through, which do not include the molecules of toxins and tar which are considered heavier. This reduces the amount of toxins and nicotine in each inhalation, thus reducing the desire and desire to smoke without damaging the taste of the cigarette`,

  `NIC- Out cigarette filter with a mechanical filtration system that is applied to the cigarette and selectively absorbs the large smoke particles of cigarette tar containing toxic compounds and other carcinogenic substances`,

  `The action principle of the nic-out filter is based on the gas engine’s gas behavior rules and has been developed in the framework of space technologies.`,
];
