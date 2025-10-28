import { useState } from "react";
import { useViewport } from "../hooks/useViewport";
import { useFadeIn } from "../hooks/useFadeIn";
import { content } from "../data/content";

export default function Technology() {
  const technologies = content.technology;
  const [technology, setTechnology] = useState(technologies[0]);
  const viewport = useViewport();
  const { fadeIn, triggerFade } = useFadeIn();

  function handleSetTechnology(tech: (typeof technologies)[0]) {
    setTechnology(tech);
    triggerFade();
  }

  return (
    <main className="w-full py-12 px-0 lg:px-12 flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center sm:justify-start sm:px-24 gap-4">
        <p className="text-md sm:text-xl text-white/20 font-semibold">03</p>
        <p className="text-md sm:text-xl text-white">SPACE LAUNCH 101</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center lg:flex-row-reverse lg:justify-around ">
        <img
          src={
            viewport === "desktop"
              ? technology.images.portrait
              : technology.images.landscape
          }
          alt={technology.name}
          className={`my-12 sm:my-16 lg:my-24 ${fadeIn ? "fade-in" : ""}`}
        />
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <ul className="flex lg:flex-col gap-4">
            {technologies.map((tech, index) => (
              <li
                className={`h-14 w-14 lg:h-18 lg:w-18 rounded-full border-2 border-white/10 flex items-center justify-center cursor-pointer ${
                  technology.name === tech.name
                    ? "bg-white text-black"
                    : "bg-transparent text-white"
                } font-bold text-lg lg:text-2xl hover:border-white`}
                key={tech.name}
                onClick={() => handleSetTechnology(tech)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
          <div
            className={`flex flex-col items-center lg:items-start max-w-lg px-6 lg:px-0 ${
              fadeIn ? "fade-in" : ""
            }`}
          >
            <p className="text-white/50 text-md sm:text-lg">
              THE TERMINOLOGY...
            </p>
            <h1 className="text-white text-2xl sm:text-4xl my-4">
              {technology.name.toLocaleUpperCase()}
            </h1>
            <p className="text-white text-md sm:text-lg text-center lg:text-left">
              {technology.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
