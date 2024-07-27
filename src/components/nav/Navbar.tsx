import React, { useState, useEffect } from 'react';

import './Navbar.css';
import logo from '../../assets/logo.jpg';
import { LINK, LINKS } from '../../constant/mock-data';
import { SunIcon, DarkIcon, MenuIcon, CrossIcon } from '../../icons';

type UI = { active: string; isMobile: boolean };
type NavProps = { isDark: boolean; onToggle: () => void };

const Navbar = ({ isDark, onToggle }: NavProps) => {
  const [ui, setUi] = useState<UI>({ active: '', isMobile: false });

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

      setUi((prev: UI) => ({ ...prev, active: targetId }));
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = LINKS.map((link) =>
        document.getElementById(link.targetId)
      );

      const scrollPos = window.scrollY || document.documentElement.scrollTop;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPos >= sectionTop &&
            scrollPos < sectionTop + sectionHeight
          ) {
            setUi((prev: UI) => ({ ...prev, active: section.id }));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScrollSpy);

    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  const handleMobile = () => {
    setUi((prev: UI) => ({ ...prev, isMobile: !prev.isMobile }));
  };

  return (
    <nav className="fixed top-0 md:top-4 z-50 w-full flex flex-col justify-center items-center rounded-full">
      <div className="flex w-full md:w-[38rem] items-center justify-between overflow-y-hidden backdrop-blur-md py-4 px-6 md:rounded-full md:shadow-2xl">
        <a
          href="#home"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
            handleScroll(e, 'hero')
          }
        >
          <img
            src={logo}
            alt="logo"
            className="w-[30px] h-[20px] object-cover rounded"
          />
        </a>
        <div className="hidden space-x-6 md:flex">
          {LINKS.map((link: LINK, idx: number) => (
            <a
              key={idx}
              href={`#${link.targetId}`}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                handleScroll(e, link.targetId)
              }
              className={`text-sm mx-4 font-semibold ${idx !== 0 ? 'border-l-2 border-TX-dark pl-2' : ''} ${
                ui.active === link.targetId ? 'active' : 'notActive'
              }`}
            >
              {link.title}
            </a>
          ))}
          <button
            onClick={onToggle}
            className="border-l-2 border-TX-dark pl-2 ms-4"
          >
            {isDark ? (
              <SunIcon isDark={isDark} />
            ) : (
              <DarkIcon isDark={isDark} />
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-6">
          <button onClick={handleMobile}>
            {ui.isMobile ? (
              <CrossIcon isDark={isDark} />
            ) : (
              <MenuIcon isDark={isDark} />
            )}
          </button>

          <button onClick={onToggle}>
            {isDark ? (
              <SunIcon isDark={isDark} />
            ) : (
              <DarkIcon isDark={isDark} />
            )}
          </button>
        </div>
      </div>

      {ui.isMobile && (
        <div className="w-full backdrop-blur-lg md:hidden">
          {LINKS.map((link: LINK, idx: number) => (
            <a
              key={idx}
              href={`#${link.targetId}`}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                handleScroll(e, link.targetId)
              }
              className={`text-sm block p-4 font-semibold tracking-tighter uppercase 
                ${idx === LINKS.length - 1 ? 'pb-8' : ''} ${
                  ui.active === link.targetId ? 'active' : 'notActive'
                }
              `}
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
