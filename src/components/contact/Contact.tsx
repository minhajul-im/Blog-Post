import { IconType } from '../../icons';
import Heading from '../common/Heading';
import CONTACT_IMG from '../../assets/contact.webp';
import { CONTACT, CONTACT_ICONS } from '../../constant/mock-data';

const Contact = ({ isDark }: IconType) => {
  return (
    <section id="contact" className="pb-48 mt-16 container">
      <Heading side="right">Contact us</Heading>

      <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center py-8">
        <div className="w-full md:w-1/2 py-10 flex justify-center items-center rounded-lg">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={CONTACT_IMG}
            alt="contact"
          />
        </div>

        <div className="w-full md:w-1/2 py-10 flex justify-center items-center">
          <div className="flex gap-6 flex-col">
            {CONTACT_ICONS.map((ICON, idx: number) => (
              <div key={idx} className="flex gap-4 items-center">
                <span>
                  <ICON isDark={isDark} />
                </span>
                <span className="font-semibold text-base text-TX-main tracking-wide">
                  {CONTACT[idx]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
