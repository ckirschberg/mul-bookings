import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function StateExample() {
  //        get    set      =          startværdi
  const [happy, setHappy] = useState(true);

  const switchHappy = () => {
    setHappy(!happy);
  };

  return (
    <div>
      <p>I am happy? {happy.toString()}</p>
      <button onClick={switchHappy}>Switch happy</button>
    </div>
  );
}

export default StateExample;
