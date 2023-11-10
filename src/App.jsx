import React, { useState, useEffect } from "react";
import Dice from "./assets/icon-dice.svg";
import Mobiledivider from "./assets/pattern-divider-mobile.svg";

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceNumber, setAdviceNumber] = useState(117);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        const adviceText = data.slip.advice;
        setAdvice(adviceText);
        setAdviceNumber(adviceNumber + 1);
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleDiceClick = () => {
    fetchAdvice();
  };

  return (
    <div className="bg-slate-900 w-screen h-screen flex flex-col justify-center p-4 ">
      <main className="bg-gray-700 px-8 pt-8 pb-12 max-w-sm rounded-xl mx-auto flex flex-col space-y-6 relative">
        <p className="text-green-400 text-sm text-center">ADVICE #{adviceNumber}</p>
        <p className="text-slate-100 text-2xl text-center flex flex-wrap">
          {advice}
        </p>
        <div className="flex justify-center">
          <img src={Mobiledivider} alt="Mobiledivider" />
        </div>
        <div className="relative">
          <div className="bg-gray relative">
            <div className="absolute inset-x-0  -bottom-20 flex justify-center ">
              <div className="bg-green-400 rounded-full w-14 cursor-pointer hover:bg-green-400 hover:shadow-2xl hover:shadow-green-500 ">
                <img src={Dice} alt="Dice" className="p-4 " onClick={handleDiceClick} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
