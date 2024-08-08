import { useState } from 'react';
import Heading from '../common/Heading';
import { DownArrow, UpArrow, IconType } from '../../icons';
import { FAQ_DATA, FaqType } from '../../constant/mock-data';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = ({ isDark }: IconType) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
    console.log(FAQ_DATA[index].answer.split(' ').length);
  };

  return (
    <section id="faq" className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <Heading>Frequently Asked Questions!</Heading>

        <div className="max-w-6xl mx-auto mt-8 space-y-4 md:mt-16">
          {FAQ_DATA.map((item: FaqType, idx: number) => (
            <div
              key={item.question}
              className="transition-all duration-200 bg-BG-soft hover:bg-BG-main border border-BG-main hover:border-BG-dark shadow-lg cursor-pointer rounded"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6 transition-all duration-100"
              >
                <span className="text-lg font-semibold text-TX-main text-wrap">
                  {item.question}
                </span>
                <span>
                  {isOpen === idx ? (
                    <UpArrow isDark={isDark} />
                  ) : (
                    <DownArrow isDark={isDark} />
                  )}
                </span>
              </button>

              {isOpen === idx && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: 'auto',
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      ease: 'easeInOut',
                    }}
                    className="text-TX-soft px-4 pb-5 sm:px-6 sm:pb-6 cursor-default"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

const calculateDuration = (answer: string) => {
  const baseDuration = 0.5; // base duration in seconds
  const additionalDurationPerCharacter = 0.02; // additional duration per character
  return baseDuration + answer.length * additionalDurationPerCharacter;
};
