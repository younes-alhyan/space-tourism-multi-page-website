import { useState } from "react";

export default function Home() {
  const [popIn, setPopIn] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  function handleMouseEnter() {
    if (!isHidden) return;
    setIsHidden(false);
    setPopIn(true);
  }

  function handleMouseLeave() {
    if (isHidden) return;
    setPopIn(false);
    setTimeout(() => {
      setIsHidden(true);
    }, 500);
  }

  return (
    <main className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between my-32 md:my-48 md:px-12 lg:px-24">
      <div className="flex flex-col items-center justify-center text-white text-center md:items-start md:text-left max-w-lg px-6 md:px-0">
        <p className="text-xl font-medium my-2">SO, YOU WANT TO TRAVEL TO</p>
        <h1 className="text-8xl my-4">SPACE</h1>
        <p className="text-md font-sm my-2">
          Let's face it, if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div
        className="relative h-48 aspect-square rounded-full bg-white flex items-center justify-center mt-12 md:mt-0 cursor-pointer group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`absolute ${
            isHidden ? "hidden" : "block"
          } h-82 aspect-square rounded-full bg-white/10 ${
            popIn ? "pop-in" : "pop-out"
          }`}
        ></div>
        <p>EXPLORE</p>
      </div>
    </main>
  );
}
