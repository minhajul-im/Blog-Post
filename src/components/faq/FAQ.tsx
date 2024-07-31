import { useState } from 'react';
import Heading from '../common/Heading';
import { DownArrow, UpArrow, IconType } from '../../icons';
import { FAQ_DATA, FaqType } from '../../constant/mock-data';

const FAQ = ({ isDark }: IconType) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <Heading side="left">Frequently Asked Questions!</Heading>

        <div className="max-w-6xl mx-auto mt-8 space-y-4 md:mt-16">
          {FAQ_DATA.map((item: FaqType, idx: number) => (
            <div
              key={item.question}
              className="transition-all duration-200 bg-BG-soft hover:bg-BG-main border border-BG-main hover:border-BG-dark shadow-lg cursor-pointer rounded"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="text-lg font-semibold text-TX-main text-wrap">
                  {item.question}
                </span>
                <span className="flex">
                  {isOpen === idx ? (
                    <UpArrow isDark={isDark} />
                  ) : (
                    <DownArrow isDark={isDark} />
                  )}
                </span>
              </button>

              {isOpen === idx && (
                <div className="text-TX-soft px-4 pb-5 sm:px-6 sm:pb-6 cursor-default">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
