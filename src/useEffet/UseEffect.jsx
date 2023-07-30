const data = `
useEffect is a built-in hook that allows functional components to perform side effects. Side effects are actions that are executed outside the scope of the component rendering, such as data fetching, subscriptions, or DOM manipulation.
`;
const UseEffect = () => {
  return (
    <div>
      <h1> What is useEffect?</h1>
      <p> {data} </p>
    </div>
  );
};

export default UseEffect;
