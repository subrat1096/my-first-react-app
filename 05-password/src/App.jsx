import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_=+[]{}`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  const handleCopy = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 26);
    window.navigator.clipboard.writeText(password);
    setTimeout(() => {
      alert("Copied to Clip-Board");
    }, 1000);
  }, [password]);
  return (
    <>
      <h1 className="text-center text-4xl font-bold text-blue-300">
        Password Generator
      </h1>
      <div className="flex align-items-center justify-center p-10 gap-x-2 text-center w-full max-w-lg mx-auto">
        <input
          type="text"
          value={password}
          placeholder="Enter Password"
          readOnly
          ref={passwordRef}
          className="rounded-md p-3 w-full text-black"
        />
        <input
          type="button"
          value="Copy"
          className="bg-blue-600 rounded-md p-3 text-center cursor-pointer hover:bg-blue-800"
          onClick={handleCopy}
        />
      </div>
      <div className="flex align-items-center justify-center gap-x-4">
        <input
          type="range"
          name=""
          id="length"
          min={8}
          max={26}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor="length">Length : {length}</label>

        <input
          type="checkbox"
          name="number-allowed"
          id="number-allowed"
          value={numAllowed}
          onChange={() => setNumAllowed((prev) => !prev)}
        />
        <label htmlFor="number-allowed">Number</label>

        <input
          type="checkbox"
          name="special-char-allowed"
          id="char-allowed"
          value={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label htmlFor="char-allowed">Special Character</label>
      </div>
    </>
  );
}

export default App;
