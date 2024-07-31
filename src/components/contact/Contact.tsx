import './Contact.css';
import { IconType } from '../../icons';
import Heading from '../common/Heading';
import { CONTACT, CONTACT_ICONS } from '../../constant/mock-data';

const Contact = ({ isDark }: IconType) => {
  return (
    <section id="contact" className="pb-48 mt-16 container">
      <Heading side="right">Contact us</Heading>

      <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center py-8">
        <div className="w-full md:w-1/2 py-10 flex justify-center items-center relative">
          <div className="rounded-SM md:rounded-MD lg:rounded-LG absolute  w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] custom" />
          <span className="loader" />
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
