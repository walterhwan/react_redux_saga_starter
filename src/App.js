import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <p>{`Count: ${counter}`}</p>
        <button onClick={() => dispatch({ type: "INCREASE_REQUEST" })}>
          Increment
        </button>
      </header>
    </div>
  );
}

export default App;
