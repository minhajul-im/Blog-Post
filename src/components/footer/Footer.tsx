import './Footer.css';
import { SOCIALS, SOCIAL_LINKS } from '../../constant/mock-data';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <h2 className="text-2xl font-bold text-TX-soft text-center py-4">
        Follow Us
      </h2>
      <div className="flex gap-4 pb-8 items-center">
        {SOCIALS.map((ICON, idx: number) => (
          <a className="text-white" key={idx} href={SOCIAL_LINKS[idx]}>
            <ICON />
          </a>
        ))}
      </div>

      <div className="flex gap-6 items-center text-TX-soft font-semibold pb-4 text-base">
        <button className="hover:text-TX-dark transition-all duration-100">
          Terms & Conditions
        </button>
        <button className="hover:text-TX-dark transition-all duration-100">
          Privacy & Policy
        </button>
      </div>

      <p className="italic text-sm">&copy;2024 packNjar </p>
    </footer>
  );
};

export default Footer;
