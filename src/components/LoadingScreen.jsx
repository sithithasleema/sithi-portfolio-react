import { useEffect } from "react";
import { useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Sithi Thasleema />";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(intervalId);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 text-gray-200 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-10 ">|</span>
      </div>

      <div className="w-[300px] h-[2px] bg-gray-400 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-[#c3484b] shadow-[0_0_15px_#c3484b] animate-loading-bar">
          {""}
        </div>
      </div>
    </div>
  );
};
