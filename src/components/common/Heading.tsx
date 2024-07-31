import { motion } from 'framer-motion';

type HeadingProps = { children: string; side?: 'left' | 'right' };

const Heading = ({ children, side }: HeadingProps) => {
  const initialX = side === 'left' ? '-100%' : '100%';

  return (
    <div className="max-w-2xl mx-auto text-center my-4">
      <motion.h1
        initial={{ opacity: 0, x: initialX }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2,
          },
        }}
        viewport={{ once: false }}
        className="text-3xl md:text-4xl lg:text-5xl my-4 md:my-6 text-TX-main font-bold md:font-extrabold"
      >
        {children}
      </motion.h1>
    </div>
  );
};

export default Heading;
