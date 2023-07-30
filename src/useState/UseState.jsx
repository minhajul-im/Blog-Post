import { useState } from "react";

const data = {
  state: `A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components.

  useState a built-in hook that allows functional components to have state. It is one of the most commonly used hooks and is essential for managing and updating the local state of functional components.`,

  work: `useState is a special function. you've to pass the initial value or argument, It returns an array with two elements, 1st current state value, and 2nd a function to update the state.
  `,
};

const UseState = () => {
  // this is useState
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>This is useState</h1>
      <div style={{ textAlign: "center" }}>
        <h1> {counter} </h1>
        <button onClick={() => setCounter((pre) => pre + 1)}>Count</button>
      </div>
      <h3>What is UseState?</h3>
      <p> {data.state} </p>
      <h3>How does it work?</h3>
      <p> {data.work} </p>
    </div>
  );
};

export default UseState;
