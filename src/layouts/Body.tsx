import type { NavItem } from "../types";
import Home from "../components/Home";
import Destination from "../components/Destination";
import Crew from "../components/Crew";
import Technology from "../components/Technology";

interface BodyProps {
  active: NavItem;
}

const sectionComponents: Record<NavItem, React.FC> = {
  home: Home,
  destination: Destination,
  crew: Crew,
  technology: Technology,
};

export default function Body({ active }: BodyProps) {
  const ActiveSection = sectionComponents[active];
  return <ActiveSection />;
}
