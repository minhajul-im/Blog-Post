import Heading from './Heading';
import handImg from '../../assets/beautiful-hand-with-nicout.jpg';

const CoverImage = () => {
  return (
    <section className="container my-20 transition-all duration-300">
      <Heading side="left">See The Result!</Heading>

      <div className="w-full h-auto my-10">
        <img
          src={handImg}
          alt="simple demo"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </section>
  );
};

export default CoverImage;
