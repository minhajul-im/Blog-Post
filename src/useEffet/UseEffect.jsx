import { useEffect, useState } from "react";

const data = `
useEffect is a built-in hook that allows functional components to perform side effects. Side effects are actions that are executed outside the scope of the component rendering, such as data fetching, subscriptions, or DOM manipulation.
`;
const UseEffect = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const date = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(date);
  }, [time]);

  return (
    <div>
      <h3 style={{ textAlign: "center" }}> {time.toLocaleTimeString()} </h3>
      <h1> What is useEffect?</h1>
      <p> {data} </p>
    </div>
  );
};

export default UseEffect;
