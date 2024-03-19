import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [hoverState, setHoverState] = useState({
    linkHovered: false,
    menuHovered: false,
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkHover = (hovered) => {
    setHoverState((prev) => ({ ...prev, linkHovered: hovered }));
  };

  const handleMenuHover = (hovered) => {
    setHoverState((prev) => ({ ...prev, menuHovered: hovered }));
  };

  useEffect(() => {
    if (hoverState.linkHovered || hoverState.menuHovered) {
      setIsMegaMenuOpen(true);
    } else {
      const timer = setTimeout(() => {
        setIsMegaMenuOpen(false);
      }, 300); // Adjust delay as needed

      return () => clearTimeout(timer);
    }
  }, [hoverState]);

  const ServicesMenuContent = {
    linkHref: "#services",
    linkName: "Услуги",
    defaultCategory: "Категория 1",
    categories: {
      "Категория 1": [
        "Услуга 1.1",
        "Услуга 1.2",
        "Услуга 1.3",
        "Услуга 1.4",
        "Услуга 1.5",
      ],
      "Категория 2": ["Услуга 2.1", "Услуга 2.2"],
      "Категория 3": ["Услуга 3.1", "Услуга 3.2"],
    },
  };

  return (
    <header className="sticky top-[24px] bg-white text-black md:py-4 z-[99]">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4 md:p-0">
        <Link href="/">
          <img
            src="/logo.svg"
            alt="Клиника красоты SarBona"
            className="h-16 w-auto mr-8"
          />
        </Link>

        {/* Appointment button for mobile */}
        <div className="lg:hidden flex flex-grow justify-center mr-5">
          <Link
            href="#appointment"
            className="px-4 py-4 bg-light-golden text-white rounded hover:bg-dark-golden transition duration-300"
          >
            Записаться на сеанс
          </Link>
        </div>

        {/* Hamburger menu button */}
        <div className="lg:hidden z-50">
          <button
            onClick={toggleMobileMenu}
            className={`flex flex-col h-10 w-10 justify-around items-center p-2 relative focus:outline-none ${
              isMobileMenuOpen ? "open" : ""
            }`}
          >
            {/* Hamburger Icon */}
            <span
              className={`block w-full h-0.5 bg-black transform transition duration-500 ease-in-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-black transform transition duration-500 ease-in-out ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-black transform transition duration-500 ease-in-out ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:flex w-full lg:w-auto ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <nav className="w-full lg:flex lg:items-center lg:justify-between">
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 w-full">
              <li className="lg:hidden">
                <Link
                  href="#services"
                  className="transition-colors duration-300 hover:text-light-golden flex items-center px-5 py-5 text-3xl md:text-base"
                >
                  Услуги
                </Link>
              </li>
              <li className="group relative hidden lg:block">
                <a
                  href="#services"
                  className="transition-colors duration-300 hover:text-light-golden flex items-center px-5 py-5 text-3xl md:text-base"
                  onMouseEnter={() => handleLinkHover(true)}
                  onMouseLeave={() => handleLinkHover(false)}
                >
                  Услуги
                  <svg
                    width="1em"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`transform transition-transform duration-300 ${
                      isMegaMenuOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
                  </svg>
                </a>
              </li>
              <li className="group relative">
                <a
                  href="#about"
                  className="transition-colors duration-300 hover:text-light-golden flex items-center px-5 py-5 text-3xl md:text-base"
                >
                  О нас
                </a>
              </li>
              <li className="group relative">
                <a
                  href="#deals"
                  className="transition-colors duration-300 hover:text-light-golden flex items-center px-5 py-5 text-3xl md:text-base"
                >
                  Акции
                </a>
              </li>
              <li className="group relative">
                <a
                  href="#doctors"
                  className="transition-colors duration-300 hover:text-light-golden flex items-center px-5 py-5 text-3xl md:text-base"
                >
                  Врачи
                </a>
              </li>
              <li className="group relative lg:hidden xl:block">
                <a
                  href="#certificates"
                  className="transition-colors duration-300 hover:text-light-golden flex items-center px-5 py-5 text-3xl md:text-base"
                >
                  Сертификаты
                </a>
              </li>
              <li className="group relative lg:hidden xl:block">
                <a
                  href="#reviews"
                  className="transition-colors duration-300 hover:text-light-golden flex items-center px-5 py-5 text-3xl md:text-base"
                >
                  Отзывы
                </a>
              </li>
              <li className="group relative">
                <a
                  href="#contact"
                  className="transition-colors duration-300 hover:text-light-golden flex items-center px-5 py-5 text-3xl md:text-base"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden lg:flex">
          <Link
            href="#appointment"
            className="px-4 py-4 bg-light-golden text-white rounded hover:bg-dark-golden transition duration-300"
          >
            Записаться на сеанс
          </Link>
        </div>
        <HeaderMenu
          menuContent={ServicesMenuContent}
          isMenuOpen={isMegaMenuOpen}
          onMenuHover={handleMenuHover}
        />
      </div>
    </header>
  );
};

export default Header;
