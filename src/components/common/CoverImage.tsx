import { motion } from 'framer-motion';

import Heading from './Heading';
import handImg from '../../assets/beautiful-hand-with-nicout.jpg';

const CoverImage = () => {
  return (
    <section className="container my-20 transition-all duration-300">
      <Heading side="left">See The Result!</Heading>

      <div className="flex justify-center items-center">
        <motion.div
          initial={{ height: '0%', width: '0%', transformOrigin: 'center' }}
          whileInView={{
            height: '100%',
            width: '100%',
            transition: { duration: 3 },
          }}
          exit={{ height: '0%', width: '0%' }}
          viewport={{ once: false }}
          className="w-full h-auto my-16 transition-all duration-150"
        >
          <img
            src={handImg}
            alt="simple demo"
            className="w-full h-full object-cover rounded-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CoverImage;
