import { useState } from "react";

function App() {
  const [color, setColor] = useState("indigo");

  function randomColor() {
    const random = `#${Math.random().toString(16).slice(2).substring(0, 6)}`;
    setColor(random);
  }

  function gradientColor() {
    function randomColor() {
      const random = `#${Math.random().toString(16).slice(2).substring(0, 6)}`;
      return random;
    }
    const color1 = randomColor();
    const color2 = randomColor();

    const gradient = `linear-gradient(to right, ${color1} , ${color2} )`;
    setColor(gradient);
  }
  return (
    <div className="w-auto h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex text-center align-items-center justify-around gap-3 shadow-lg bg-slate-700 px-3 py-3 rounded-full">
          <button
            className="outline-none px-4 bg-red-600 rounded-full shadow-lg text-white"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 bg-blue-600 rounded-full shadow-lg text-white"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 bg-green-600 rounded-full shadow-lg text-white"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 bg-white rounded-full shadow-lg text-black"
            onClick={() => setColor("white")}
          >
            White
          </button>
          <button
            className="outline-none px-4 bg-black rounded-full shadow-lg text-white"
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ backgroundColor: color }}
            onClick={randomColor}
          >
            Random
          </button>
          <button
            className="outline-none px-4 rounded-full shadow-lg text-white"
            style={{ background: color }}
            onClick={gradientColor}
          >
            Gradient
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
