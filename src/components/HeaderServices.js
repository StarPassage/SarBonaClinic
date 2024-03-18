import { useState, useRef } from "react";

const HeaderServices = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Категория 1");
  const menuRef = useRef(null);

  const categoriesAndServices = {
    "Категория 1": ["Услуга 1.1", "Услуга 1.2", "Услуга 1.3"],
    "Категория 2": ["Услуга 2.1", "Услуга 2.2"],
    // ... other categories and services
  };

  const handleMenuToggle = (open, event) => {
    if (
      event &&
      event.type === "mouseleave" &&
      menuRef.current &&
      menuRef.current.contains(event.relatedTarget)
    ) {
      return;
    }
    setIsMenuOpen(open);
  };

  return (
    <li className="group relative" ref={menuRef}>
      <a
        href="#services"
        className="transition-colors duration-300 hover:text-light-golden flex items-center px-5 py-5 text-3xl md:text-base"
        onMouseEnter={() => handleMenuToggle(true)}
        onMouseLeave={(e) => handleMenuToggle(false, e)}
        onClick={(e) => {
          e.preventDefault();
          handleMenuToggle(!isMenuOpen);
        }}
      >
        Услуги
        <svg
          width="1em"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`transform transition-transform duration-300 ${
            isMenuOpen ? "rotate-180" : ""
          }`}
        >
          <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
        </svg>
      </a>

      <div
        className={`absolute transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 hidden"
        } shadow-lg rounded-lg`}
        style={{
          width: "600px",
          transform: "translateX(-10%)",
        }}
        onMouseLeave={() => handleMenuToggle(false)}
      >
        <div className="flex rounded-lg overflow-hidden w-full">
          <div className="w-1/2 bg-gray-100 p-4 rounded-l-lg">
            <ul>
              {Object.keys(categoriesAndServices).map((category) => (
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
          <div className="w-1/2 bg-white p-4 rounded-r-lg">
            <ul>
              {activeCategory &&
                categoriesAndServices[activeCategory].map((service) => (
                  <li
                    key={service}
                    className="py-2 rounded-lg hover:bg-gray-200"
                  >
                    <a href={`#${service}`} className="ml-3">
                      {service}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};

export default HeaderServices;
