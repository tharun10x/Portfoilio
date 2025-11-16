import { useEffect, useState } from "react";

const name = "Tharun Prasad K";

const TypingName = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(name.slice(0, i));
      i++;
      if (i > name.length) clearInterval(interval);
    }, 250); // typing speed
    return () => clearInterval(interval);
  }, []);
  

  return (
    <h1 className="text-5xl md:text-7xl font-bold">
      {text}
      <span className="animate-pulse text-white">|</span>
    </h1>
  );
};

export default TypingName;
