import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleClick = (value) => {
    setInputValue(inputValue + value);
  };
  const resultclr = () => {
    setInputValue("");
  };
  const result = () => {
    setInputValue(eval(inputValue));
  };

  return (
    <div className="bg-blue-800 min-h-screen flex justify-center items-center p-4">
      <div className="bg-black w-full max-w-md sm:max-w-lg md:max-w-xl rounded-2xl px-5 py-15">
        {/* 1st Row */}
        <div className="flex flex-row gap-4 mb-6">
          {/* Input Box */}
          <div className="bg-white h-12 rounded-2xl flex items-center justify-center w-[440px]">
            <input
              value={inputValue}
              onClick={(e) => setInputValue(e.target.value)}
              className="outline-none text-xl font-bold text-center bg-transparent w-full px-2"
              readOnly
            />
          </div>
          {/* Clear Button */}
          <div
            onClick={resultclr}
            className="w-[160px] bg-white h-12 rounded-2xl flex items-center justify-center cursor-pointer"
          >
            <h1 className="text-xl font-semibold">Clear</h1>
          </div>
        </div>

        {/* + and = Buttons */}
        <div className="flex gap-4 mb-6 text-white text-2xl font-semibold px-5">
          <div
            onClick={() => handleClick("+")}
            className="w-1/3 bg-yellow-600 h-12 rounded-2xl flex items-center justify-center cursor-pointer"
          >
            <button>+</button>
          </div>
          <div
            onClick={result}
            className="w-2/3 bg-yellow-600 h-12 rounded-xl flex items-center justify-center cursor-pointer"
          >
            <button>=</button>
          </div>
        </div>

        {/* *, -, / Buttons */}
        <div className="flex gap-4 mb-2 text-white text-2xl font-bold px-5">
          <div
            onClick={() => handleClick("*")}
            className="w-1/3 bg-yellow-600 h-12 rounded-2xl flex items-center justify-center cursor-pointer"
          >
            <button>*</button>
          </div>
          <div
            onClick={() => handleClick("-")}
            className="w-1/3 bg-yellow-600 h-12 rounded-2xl flex items-center justify-center cursor-pointer"
          >
            <button>-</button>
          </div>
          <div
            onClick={() => handleClick("/")}
            className="w-1/3 bg-yellow-600 h-12 rounded-2xl flex items-center justify-center cursor-pointer"
          >
            <button>/</button>
          </div>
        </div>

        {/* Numbers 1–3 */}
        <div className="flex gap-4 px-5 text-black font-bold py-4 text-2xl">
          <div
            onClick={() => handleClick("1")}
            className="flex justify-center bg-white w-full h-12 rounded-2xl items-center"
          >
            <button>1</button>
          </div>
          <div
            onClick={() => handleClick("2")}
            className="flex justify-center bg-white w-full h-12 rounded-2xl items-center"
          >
            <button>2</button>
          </div>
          <div
            onClick={() => handleClick("3")}
            className="flex justify-center bg-white w-full h-12 rounded-2xl items-center"
          >
            <button>3</button>
          </div>
        </div>

        {/* Numbers 4–6 */}
        <div className="flex gap-4 px-5 text-black font-bold text-2xl">
          <div
            onClick={() => handleClick("4")}
            className="flex justify-center bg-white w-full h-12 rounded-2xl items-center"
          >
            <button>4</button>
          </div>
          <div
            onClick={() => handleClick("5")}
            className="flex justify-center bg-white w-full h-12 rounded-2xl items-center"
          >
            <button>5</button>
          </div>
          <div
            onClick={() => handleClick("6")}
            className="flex justify-center bg-white w-full h-12 rounded-2xl items-center"
          >
            <button>6</button>
          </div>
        </div>

        {/* Numbers 7–9 */}
        <div className="flex gap-4 px-5 py-4 text-black font-bold text-2xl">
          <div
            onClick={() => handleClick("7")}
            className="flex justify-center bg-white w-full h-12 rounded-2xl items-center"
          >
            <button>7</button>
          </div>
          <div
            onClick={() => handleClick("8")}
            className="flex justify-center bg-white w-full h-12 rounded-2xl items-center"
          >
            <button>8</button>
          </div>
          <div
            onClick={() => handleClick("9")}
            className="flex justify-center bg-white w-full h-12 rounded-2xl items-center"
          >
            <button>9</button>
          </div>
        </div>

        {/* 0 Button */}
        <div className="text-black text-2xl font-bold px-5">
          <div
            onClick={() => handleClick("0")}
            className="flex justify-center bg-white w-full h-12 rounded-2xl items-center"
          >
            <button>0</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
