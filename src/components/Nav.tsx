import React from 'react';
import { LINK, LINKS } from '../constant';

const Nav = () => {
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();

    const targetEle = document.getElementById(targetId);

    if (targetEle) {
      const offSetTop = targetEle.offsetTop - 80;

      window.scrollTo({
        top: offSetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <nav className="fixed top-4 z-50 w-full flex flex-col justify-center items-center">
      <div className="flex w-[30rem] items-center justify-center p-4 rounded-full shadow-2xl bg-slate-300/50">
        <div className="space-x-6 flex">
          {LINKS.map((link: LINK, idx: number) => (
            <a
              key={idx}
              href={`#${link.targetId}`}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                handleScroll(e, link.targetId)
              }
              className={`text-sm mx-4 font-semibold text-gray-800`}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
