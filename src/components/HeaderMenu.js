import { useState, useRef } from "react";
import Link from "next/link";

const HeaderMenu = ({ menuContent, isMenuOpen, onMenuHover }) => {
  const [activeCategory, setActiveCategory] = useState(
    menuContent.defaultCategory
  );
  const menuRef = useRef(null);

  return (
    <div
      ref={menuRef}
      className={`absolute inset-x-0 top-full bg-white shadow-md h-[400px] transition ease-out duration-100 ${
        isMenuOpen
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-80 pointer-events-none"
      }`}
      onMouseEnter={() => onMenuHover(true)}
      onMouseLeave={() => onMenuHover(false)}
    >
      <div className="flex rounded-lg overflow-hidden w-full">
        <div className="w-[25%] bg-gray-100 h-[400px] p-4 rounded-l-lg">
          <ul>
            {Object.keys(menuContent.categories).map((category) => (
              <li
                key={category}
                onMouseEnter={() => setActiveCategory(category)}
                className={`py-5 rounded-lg hover:bg-gray-200 ${
                  activeCategory === category ? "bg-gray-200" : ""
                }`}
              >
                <a
                  href={`#${category}`}
                  className="flex justify-between items-center ml-3 mr-3"
                >
                  {category}
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ui-svg-inline"
                  >
                    <path d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"></path>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[75%] bg-white p-4 rounded-r-lg">
          <div className="grid grid-cols-4 gap-4 grid-flow-col">
            {activeCategory &&
              menuContent.categories[activeCategory].map((service) => (
                <a
                  href={`#${service}`}
                  className="rounded-lg hover:bg-gray-200 py-6 pl-3"
                >
                  {service}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
