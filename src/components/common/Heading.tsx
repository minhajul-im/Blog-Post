type HeadingProps = { children: string };

const Heading = ({ children }: HeadingProps) => {
  return (
    <h1 className=" text-3xl md:text-4xl my-4 md:my-6 text-center text-TX-main font-bold md:font-extrabold">
      {children}
    </h1>
  );
};

export default Heading;
