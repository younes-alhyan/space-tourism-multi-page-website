import homeMobile from "../assets/home/background-home-mobile.jpg";
import homeTablet from "../assets/home/background-home-tablet.jpg";
import homeDesktop from "../assets/home/background-home-desktop.jpg";
import destinationMobile from "../assets/destination/background-destination-mobile.jpg";
import destinationTablet from "../assets/destination/background-destination-tablet.jpg";
import destinationDesktop from "../assets/destination/background-destination-desktop.jpg";
import crewMobile from "../assets/crew/background-crew-mobile.jpg";
import crewTablet from "../assets/crew/background-crew-tablet.jpg";
import crewDesktop from "../assets/crew/background-crew-desktop.jpg";
import technologyMobile from "../assets/technology/background-technology-mobile.jpg";
import technologyTablet from "../assets/technology/background-technology-tablet.jpg";
import technologyDesktop from "../assets/technology/background-technology-desktop.jpg";

export const images = {
  home: {
    mobile: homeMobile,
    tablet: homeTablet,
    desktop: homeDesktop,
  },
  destination: {
    mobile: destinationMobile,
    tablet: destinationTablet,
    desktop: destinationDesktop,
  },
  crew: {
    mobile: crewMobile,
    tablet: crewTablet,
    desktop: crewDesktop,
  },
  technology: {
    mobile: technologyMobile,
    tablet: technologyTablet,
    desktop: technologyDesktop,
  },
} as const;
