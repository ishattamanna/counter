import { useState } from "react";
import './App.css';

function App() {

  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1)
  };

  const decrease = () => {
    setNumber(number - 1)
  };

  const reset = () => {
    setNumber(0)
  };

  return (
    <div className="App">
      <div className="border-2 border-black border-solid w-[70%] mx-auto mt-[250px] rounded-lg">
        <div className="bg-blue-500 px-2 py-5 m-5 rounded-lg">
          <p className="text-white text-3xl font-bold">{number}</p>
        </div>
        <div className="flex justify-evenly mb-5">
          <button onClick={increase}
            className="btn btn-circle text-3xl">+</button>
          <button onClick={reset} className="btn btn-primary text-2xl">Reset</button>
          <button onClick={decrease}
            className="btn btn-circle text-3xl">-</button>
        </div>
      </div>
    </div>
  );
}

export default App;