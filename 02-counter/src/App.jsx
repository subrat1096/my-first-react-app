import { useState } from "react";
import "./App.css";

function App() {
  // console.log(useState());
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prevCount) => prevCount + 1);

  const decrement = () => counter > 0 && setCounter(counter - 1);

  const reset = () => setCounter(0);

  return (
    <>
      <h1>Code n'd Coffee</h1>
      <h2>
        Counter value{" "}
        <span
          style={{
            display: "block",
            color: "#FFFF00",
            fontWeight: "bold",
            fontSize: "34px",
          }}
        >
          {counter}
        </span>
      </h2>
      <div
        style={{
          display: "flex",
          gap: "8px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={decrement}>-</button>

        <button onClick={reset}>Reset</button>

        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App;
