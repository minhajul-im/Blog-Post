import Heading from '../common/Heading';
import { ABOUT, WORK } from '../../constant/mock-data';

const About = () => {
  return (
    <section id="about" className="container my-10">
      <Heading>About Us</Heading>

      <div className="flex justify-center flex-col mx-auto w-full p-4 md:w-8/12">
        {ABOUT.map((text: string) => (
          <p
            className=" my-4 text-base text-justify text-TX-main tracking-wide font-medium"
            key={text}
          >
            {text}
          </p>
        ))}

        <h2 className="text-2xl font-bold text-TX-soft text-center py-6 my-8">
          how does it work?
        </h2>

        {WORK.map((text: string) => (
          <p
            className=" my-4 text-base text-justify text-TX-main tracking-wide font-medium"
            key={text}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
