type HeadingProps = { children: string };

const Heading = ({ children }: HeadingProps) => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className=" text-3xl md:text-4xl lg:text-5xl my-4 md:my-6 text-TX-main font-bold md:font-extrabold">
        {children}
      </h1>
    </div>
  );
};

export default Heading;
