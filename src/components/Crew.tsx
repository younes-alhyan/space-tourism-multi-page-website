import { useState } from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import { content } from "../data/content";

export default function Crew() {
  const crewMembers = content.crew;
  const [member, setMember] = useState(crewMembers[0]);
  const { fadeIn, triggerFade } = useFadeIn();

  function handleMemberChange(newMember: (typeof crewMembers)[0]) {
    setMember(newMember);
    triggerFade();
  }

  return (
    <main className="w-full py-12 px-6 sm:px-12 flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center sm:justify-start sm:px-24 gap-4">
        <p className="text-md sm:text-xl text-white/20 font-semibold">02</p>
        <p className="text-md sm:text-xl text-white">MEET YOUR CREW</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center lg:flex-row lg:justify-around mt-12">
        <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
          <p
            className={`text-md sm:text-xl text-white/20 ${
              fadeIn ? "fade-in" : ""
            }`}
          >
            {member.role.toLocaleUpperCase()}
          </p>
          <h1
            className={`text-white text-2xl font-bold sm:text-4xl my-4 ${
              fadeIn ? "fade-in" : ""
            }`}
          >
            {member.name.toLocaleUpperCase()}
          </h1>
          <p
            className={`text-white text-md sm:text-lg text-center lg:text-left max-w-lg ${
              fadeIn ? "fade-in" : ""
            }`}
          >
            {member.bio}
          </p>
          <div className="flex items-center justify-center lg:items-end lg:justify-start">
            <ul className="flex mt-12 gap-4">
              {crewMembers.map((crew) => (
                <li
                  className={`h-4 aspect-square rounded-full ${
                    member.name === crew.name ? "bg-white" : "bg-white/20"
                  } hover:bg-white/40 cursor-pointer`}
                  key={crew.name}
                  onClick={() => handleMemberChange(crew)}
                ></li>
              ))}
            </ul>
          </div>
        </div>
        <img
          src={member.images.webp}
          alt={member.name}
          className={`h-64 sm:h-80 lg:h-96 m-12 sm:m-16 lg:m-24 ${
            fadeIn ? "fade-in" : ""
          }`}
        />
      </div>
    </main>
  );
}
