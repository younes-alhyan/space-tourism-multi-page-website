import { useState } from "react";
import { useViewport } from "./hooks/useViewport";
import NavBar from "./layouts/NavBar";
import Body from "./layouts/Body";
import { images } from "./data/images";
import { navItems, type NavItem } from "./types";

export default function App() {
  const [active, setActive] = useState<NavItem>("home");
  const viewport = useViewport();

  const bgImage = images[active][viewport];

  const handleSetActive = (item: NavItem = navItems[0]) => setActive(item);

  return (
    <div className="relative min-h-screen flex flex-col">
      <img
        src={bgImage}
        alt="background image"
        className="absolute h-full w-full object-cover -z-10"
      />
      <NavBar active={active} handleSetActive={handleSetActive} />
      <Body active={active} />
    </div>
  );
}
