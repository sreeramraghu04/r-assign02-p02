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
        <div className="flex gap-4 mb-6 text-white text-2xl font-bold px-5">
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
        <div className="flex gap-4 mb-4 text-black text-2xl font-bold px-5">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              onClick={() => handleClick(num.toString())}
              className="w-1/3 bg-white h-12 rounded-2xl flex items-center justify-center cursor-pointer"
            >
              <button>{num}</button>
            </div>
          ))}
        </div>

        {/* Numbers 4–6 */}
        <div className="flex gap-4 mb-4 text-black text-2xl font-bold px-5">
          {[4, 5, 6].map((num) => (
            <div
              key={num}
              onClick={() => handleClick(num.toString())}
              className="w-1/3 bg-white h-12 rounded-2xl flex items-center justify-center cursor-pointer"
            >
              <button>{num}</button>
            </div>
          ))}
        </div>

        {/* Numbers 7–9 */}
        <div className="flex gap-4 mb-4 text-black text-2xl font-bold px-5">
          {[7, 8, 9].map((num) => (
            <div
              key={num}
              onClick={() => handleClick(num.toString())}
              className="w-1/3 bg-white h-12 rounded-2xl flex items-center justify-center cursor-pointer"
            >
              <button>{num}</button>
            </div>
          ))}
        </div>

        {/* 0 Button */}
        <div className="text-black text-2xl font-bold px-5">
          <div
            onClick={() => handleClick("0")}
            className="w-full bg-white h-12 rounded-2xl flex items-center justify-center cursor-pointer"
          >
            <button>0</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
