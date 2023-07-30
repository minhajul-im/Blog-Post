const ComponentProps = (props) => {
  const { component, prop } = props.data;
  return (
    <div>
      <h1> What is Component?</h1>
      <p> {component} </p>

      <h1>What is Props?</h1>
      <p> {prop} </p>
    </div>
  );
};

export default ComponentProps;
