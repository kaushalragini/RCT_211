import "./App.css";
import React, { useState } from "react";
import Counter from "./Components/Counter";
function App() {
  const [toggle, setToggle] = useState(true);
  const toggleHandler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <div className="App">
      {toggle && <Counter />}
      <button onClick={toggleHandler}>Toggle Counter</button>
    </div>
  );
}

export default App;
