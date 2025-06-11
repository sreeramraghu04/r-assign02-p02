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
    <div className="bg-blue-800 w-full h-screen flex justify-center items-center">
      <div className="bg-black w-[500px] h-[600px] rounded-2xl px-10 py-20">
        {/* // 1st */}
        <div className="flex gap-4 text-black">
          {/* // 1.1 */}
          <div className="flex justify-center bg-white w-70 h-12 rounded-2xl items-center">
            <input
              value={inputValue}
              onClick={(e) => setInputValue(e.target.value)}
              className="outline-none text-xl font-bold text-center"
            />
          </div>
          {/* // 1.2 */}
          <div onClick={() => resultclr()} className="flex justify-center bg-white w-35 h-12 rounded-2xl items-center cursor-pointer">
            <h1 className="text-xl font-semibold">Clear</h1>
          </div>
        </div>
        {/* // 2nd */}
        <div className="text-white font-semibold text-2xl">
          {/* // 2.1 */}
          <div className="flex gap-4 px-3 py-4">
            <div onClick={() => handleClick("+")} className="flex justify-center bg-yellow-600 w-35 h-12 rounded-2xl items-center">
              <button>+</button>
            </div>
            {/* // 2.2 */}
            <div onClick={() => result()} className="flex justify-center bg-yellow-600 w-60 h-12 rounded-xl items-center cursor-pointer">
              <button>=</button>
            </div>
          </div>
        </div>
        {/* // 3rd */}
        <div className="flex gap-4 px-3 text-white font-bold text-2xl">
          {/* // 3.1 */}
          <div onClick={() => handleClick("*")} className="flex justify-center bg-yellow-600 w-40 h-12 rounded-2xl items-center">
            <button>*</button>
          </div>
          {/* // 3.2 */}
          <div onClick={() => handleClick("-")} className="flex justify-center bg-yellow-600 w-40 h-12 rounded-2xl items-center">
            <button>-</button>
          </div>
          {/* // 3.3 */}
          <div onClick={() => handleClick("/")} className="flex justify-center bg-yellow-600 w-40 h-12 rounded-2xl items-center">
            <button>/</button>
          </div>
        </div>
        {/* // 4th */}
        <div className="flex gap-4 px-3 text-black font-bold py-4">
          {/* // 4.1 */}
          <div onClick={() => handleClick("1")} className="flex justify-center bg-white w-35 h-12 rounded-2xl items-center">
            <button>1</button>
          </div>
          {/* // 4.2 */}
          <div onClick={() => handleClick("2")} className="flex justify-center bg-white w-35 h-12 rounded-2xl items-center">
            <button>2</button>
          </div>
          {/* // 4.3 */}
          <div onClick={() => handleClick("3")} className="flex justify-center bg-white w-35 h-12 rounded-2xl items-center">
            <button>3</button>
          </div>
        </div>
        {/* // 5th */}
        <div className="flex gap-4 px-3 text-black font-bold">
          {/* // 5.1 */}
          <div onClick={() => handleClick("4")} className="flex justify-center bg-white w-35 h-12 rounded-2xl items-center">
            <button>4</button>
          </div>
          {/* // 5.2 */}
          <div onClick={() => handleClick("5")} className="flex justify-center bg-white w-35 h-12 rounded-2xl items-center">
            <button>5</button>
          </div>
          {/* // 5.3 */}
          <div onClick={() => handleClick("6")} className="flex justify-center bg-white w-35 h-12 rounded-2xl items-center">
            <button>6</button>
          </div>
        </div>
        {/* // 6th */}
        <div className="flex gap-4 px-3 py-4 text-black font-bold">
          {/* // 6.1 */}
          <div onClick={() => handleClick("7")} className="flex justify-center bg-white w-35 h-12 rounded-2xl items-center">
            <button>7</button>
          </div>
          {/* // 6.2 */}
          <div onClick={() => handleClick("8")} className="flex justify-center bg-white w-35 h-12 rounded-2xl items-center">
            <button>8</button>
          </div>
          {/* // 6.3 */}
          <div onClick={() => handleClick("9")} className="flex justify-center bg-white w-35 h-12 rounded-2xl items-center">
            <button>9</button>
          </div>
        </div>
        {/* // 7th */}
        <div className="flex justify-center text-black font-bold">
          {/* // 7.1 */}
          <div onClick={() => handleClick("0")} className="flex justify-center bg-white w-100 h-12 rounded-2xl items-center">
            <button>0</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
