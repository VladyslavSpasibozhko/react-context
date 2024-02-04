import React from "react";
import { useContext } from "react";
import { useState } from "react";

const Context = React.createContext({ count: 0 });

function useCount() {
  return useContext(Context);
}

function ContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <Context.Provider value={{ count, setCount }}>{children}</Context.Provider>
  );
}

function ChildWithContext() {
  console.log("Child with context render");
  const { count, setCount } = useCount();

  return (
    <div>
      <h1>ChildWithContext</h1>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
    </div>
  );
}

function ChildWithoutContext() {
  console.log("Child without context render");

  return (
    <div>
      <h1>ChildWithoutContext</h1>
    </div>
  );
}

function Test1() {
  return (
    <ContextProvider>
      <ChildWithContext />
      <ChildWithoutContext />
    </ContextProvider>
  );
}

function Test2() {
  const [count, setCount] = useState(0);

  return (
    <Context.Provider value={{ count, setCount }}>
      <ChildWithContext />
      <ChildWithoutContext />
    </Context.Provider>
  );
}

function App() {
  return (
    <div>
      <Test1 />
      <Test2 />
    </div>
  );
}

export default App;
