import { motion } from 'framer-motion';
import video from '../../assets/video.mp4';
import thumbnail from '../../assets/thumbnail.png';
import { TITLE } from '../../constant/mock-data';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex h-screen items-center justify-center relative bg-[#283469] z-10"
    >
      <div className="absolute inset-0 -z-20 w-full h-full overflow-hidden">
        <video
          src={video}
          className="w-full h-full md:object-cover"
          muted
          autoPlay
          loop
          playsInline
          poster={thumbnail}
        ></video>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-60% to-black" />

      <div className="relative z-20 flex flex-col h-screen justify-end pb-16 md:pb-12 mx-4 w-full md:w-[750px] lg:w-[900px] text-center transition-all duration-200">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold title">
          {TITLE.split('').map((letter: string, idx: number) => (
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: idx * 0.07,
                },
              }}
              key={idx}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
