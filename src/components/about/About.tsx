import './About.css';

const About = () => {
  return (
    <div id="about" className="container">
      <h1 className="text-2xl font-bold text-center my-6"> About us</h1>
      <div className="w-10 h-10 rounded-SM bg-red-500"></div>
      <div className="w-10 h-10 rounded-MD bg-red-500"></div>
      <div className="rounded-LG bg-purple-600 absolute  w-[400px] h-[400px]" />
    </div>
  );
};

export default About;
