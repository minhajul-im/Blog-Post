import video from '../../assets/video.mp4';
import thumbnail from '../../assets/thumbnail.png';
import Button from './button/Button';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex h-screen items-center justify-center relative"
    >
      <div className="absolute inset-0 -z-20 w-full h-full overflow-hidden">
        <video
          src={video}
          className="w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          poster={thumbnail}
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-60% to-black" />

      <div className="relative z-20 flex h-screen flex-col justify-end pb-4">
        <Button />
      </div>
    </section>
  );
};

export default Hero;
