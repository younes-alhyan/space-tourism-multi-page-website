import { useState } from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import { content } from "../data/content";

export default function Destination() {
  const destinations = content.destinations;
  const [destination, setDestination] = useState(destinations[0]);
  const { fadeIn, triggerFade } = useFadeIn();

  function handleDestinationChange(newDestination: (typeof destinations)[0]) {
    setDestination(newDestination);
    triggerFade();
  }

  return (
    <section className="w-full py-12 px-0 sm:px-12 flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center sm:justify-start sm:px-24 gap-4">
        <p className="text-md sm:text-xl text-white/20 font-semibold">01</p>
        <p className="text-md sm:text-xl text-white">PICK YOUR DESTINATION</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center lg:flex-row lg:justify-around ">
        <img
          src={destination.images.webp}
          alt={destination.name}
          className={`h-64 sm:h-80 lg:h-96 m-12 sm:m-16 lg:m-24 ${
            fadeIn ? "fade-in" : ""
          }`}
        />
        <div className="flex flex-col items-center lg:items-start gap-4">
          <ul className="flex gap-2 sm:gap-4 md:gap-8">
            {destinations.map((dest) => (
              <li
                className={`text-white text-lg sm:text-xl font-medium my-2 cursor-pointer hover:border-b-2 hover:border-white/40 ${
                  destination.name === dest.name ? "border-b-2" : ""
                }`}
                onClick={() => handleDestinationChange(dest)}
              >
                {dest.name.toLocaleUpperCase()}
              </li>
            ))}
          </ul>
          <h1
            className={`text-white text-6xl sm:text-7xl my-4 ${
              fadeIn ? "fade-in" : ""
            }`}
          >
            {destination.name.toLocaleUpperCase()}
          </h1>
          <p
            className={`text-white text-md sm:text-lg text-center lg:text-left max-w-lg ${
              fadeIn ? "fade-in" : ""
            }`}
          >
            {destination.description}
          </p>
          <div
            className={`w-full border-t-2 border-white/10 my-4 flex flex-col sm:flex-row items-center justify-around gap-12 pt-8 ${
              fadeIn ? "fade-in" : ""
            }`}
          >
            <div className="flex flex-col items-center">
              <p className="text-white/50 ">AVG. DISTANCE</p>
              <p className="text-white text-4xl">{destination.distance}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-white/50 ">EST. TRAVEL TIME</p>
              <p className="text-white text-4xl">{destination.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
