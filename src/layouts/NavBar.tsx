import { useState } from "react";
import { navItems, type NavItem } from "../types";
import Logo from "../assets/shared/logo.svg";
import Menu from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";

interface NavBarProps {
  active: NavItem;
  handleSetActive: (item: NavItem) => void;
}

export default function NavBar({ active, handleSetActive }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="w-full h-24 md:h-32 lg:h-42 flex items-center justify-between lg:py-8">
      <img
        src={Logo}
        alt="Logo"
        className="h-full py-6 lg:py-4 ml-4 sm:ml-6 md:ml-12 lg:ml-24 cursor-pointer"
        onClick={() => handleSetActive(navItems[0])}
      />
      <img
        src={Menu}
        alt="Menu"
        className="sm:hidden h-full py-6 mr-4 cursor-pointer"
        onClick={toggleMenu}
      />

      <div className="hidden lg:flex grow bg-white/20 h-0.5 translate-x-32 z-10 rounded-md"></div>

      <ul className="hidden sm:flex h-full justify-center bg-white/5 backdrop-blur-3xl px-4 md:px-12 lg:px-48 gap-8 ">
        {navItems.map((item, index) => (
          <li
            className={`h-full flex items-center border-white cursor-pointer py-12 hover:border-b-2 hover:border-white/40 ${
              active === item ? "border-b-2" : ""
            }`}
            onClick={() => handleSetActive(item)}
          >
            <p className="text-white text-lg font-medium">
              {index.toString().padStart(2, "0")} {item.toUpperCase()}
            </p>
          </li>
        ))}
      </ul>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute right-0 top-0 h-full w-3/4 backdrop-blur-3xl py-12 right-slide z-10">
          <div className="flex justify-end px-8">
            <img
              src={Close}
              alt="Close menu"
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          <ul className="my-24 text-white text-2xl font-bold">
            {navItems.map((item, index) => (
              <li
                className={`my-8 ml-8 cursor-pointer hover:border-r-4 hover:border-white/40 ${
                  active === item ? "border-r-4" : ""
                }`}
                onClick={() => {
                  handleSetActive(item);
                  toggleMenu();
                }}
              >
                {index.toString().padStart(2, "0")} {item.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
