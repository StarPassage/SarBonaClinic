import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import { useState, useEffect } from "react";
import { useAppointmentForm } from "../providers/AppointmentPopupFormContext";

const Header = () => {
  const { openPopup } = useAppointmentForm();
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
    defaultCategory: "Косметология",
    categories: {
      Косметология: [
        "Услуга 1.1",
        "Услуга 1.2",
        "Услуга 1.3",
        "Услуга 1.4",
        "Услуга 1.5",
      ],
      "Маникюр и педикюр": ["Услуга 2.1", "Услуга 2.2"],
      "Парикмахерские услуги": ["Услуга 3.1", "Услуга 3.2"],
    },
  };

  return (
    <header className="sticky top-[22px] bg-white text-slate-700 md:py-4 z-[99]">
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
          <button
            onClick={openPopup}
            className="px-4 py-4 bg-light-golden text-white rounded hover:bg-dark-golden transition duration-300"
          >
            Записаться на сеанс
          </button>
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
                  href="#hotdeals"
                  className="transition-colors duration-300 hover:text-light-golden flex items-center px-5 py-5 text-3xl md:text-base"
                  onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}
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
                  onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}
                >
                  Отзывы
                </a>
              </li>
              <li className="group relative">
                <a
                  href="#contacts"
                  className="transition-colors duration-300 hover:text-light-golden flex items-center px-5 py-5 text-3xl md:text-base"
                  onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}
                >
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <Link href="https://vk.com/klinika_sarbona" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 97.75 97.75"
            className="hidden lg:block h-7 w-7 fill-current text-slate-700 transition-colors duration-300 hover:text-light-golden"
          >
            <g>
              <path
                d="M48.875,0C21.883,0,0,21.882,0,48.875S21.883,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.867,0,48.875,0z
		 M73.667,54.161c2.278,2.225,4.688,4.319,6.733,6.774c0.906,1.086,1.76,2.209,2.41,3.472c0.928,1.801,0.09,3.776-1.522,3.883
		l-10.013-0.002c-2.586,0.214-4.644-0.829-6.379-2.597c-1.385-1.409-2.67-2.914-4.004-4.371c-0.545-0.598-1.119-1.161-1.803-1.604
		c-1.365-0.888-2.551-0.616-3.333,0.81c-0.797,1.451-0.979,3.059-1.055,4.674c-0.109,2.361-0.821,2.978-3.19,3.089
		c-5.062,0.237-9.865-0.531-14.329-3.083c-3.938-2.251-6.986-5.428-9.642-9.025c-5.172-7.012-9.133-14.708-12.692-22.625
		c-0.801-1.783-0.215-2.737,1.752-2.774c3.268-0.063,6.536-0.055,9.804-0.003c1.33,0.021,2.21,0.782,2.721,2.037
		c1.766,4.345,3.931,8.479,6.644,12.313c0.723,1.021,1.461,2.039,2.512,2.76c1.16,0.796,2.044,0.533,2.591-0.762
		c0.35-0.823,0.501-1.703,0.577-2.585c0.26-3.021,0.291-6.041-0.159-9.05c-0.28-1.883-1.339-3.099-3.216-3.455
		c-0.956-0.181-0.816-0.535-0.351-1.081c0.807-0.944,1.563-1.528,3.074-1.528l11.313-0.002c1.783,0.35,2.183,1.15,2.425,2.946
		l0.01,12.572c-0.021,0.695,0.349,2.755,1.597,3.21c1,0.33,1.66-0.472,2.258-1.105c2.713-2.879,4.646-6.277,6.377-9.794
		c0.764-1.551,1.423-3.156,2.063-4.764c0.476-1.189,1.216-1.774,2.558-1.754l10.894,0.013c0.321,0,0.647,0.003,0.965,0.058
		c1.836,0.314,2.339,1.104,1.771,2.895c-0.894,2.814-2.631,5.158-4.329,7.508c-1.82,2.516-3.761,4.944-5.563,7.471
		C71.48,50.992,71.611,52.155,73.667,54.161z"
              />
            </g>
          </svg>
        </Link>
        <Link href="https://ok.ru/klinika.sarbona" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 97.75 97.75"
            className="hidden lg:block h-7 w-7 fill-current text-slate-700 transition-colors duration-300 hover:text-light-golden"
          >
            <g>
              <g>
                <path
                  d="M48.921,40.507c4.667-0.017,8.384-3.766,8.367-8.443c-0.017-4.679-3.742-8.402-8.411-8.406
			c-4.708-0.005-8.468,3.787-8.432,8.508C40.48,36.826,44.239,40.524,48.921,40.507z"
                />
                <path
                  d="M48.875,0C21.882,0,0,21.883,0,48.875S21.882,97.75,48.875,97.75S97.75,75.867,97.75,48.875S75.868,0,48.875,0z
			 M48.945,14.863c9.52,0.026,17.161,7.813,17.112,17.438c-0.048,9.403-7.814,17.024-17.318,16.992
			c-9.407-0.032-17.122-7.831-17.066-17.253C31.726,22.515,39.445,14.837,48.945,14.863z M68.227,56.057
			c-2.105,2.161-4.639,3.725-7.453,4.816c-2.66,1.031-5.575,1.55-8.461,1.896c0.437,0.474,0.642,0.707,0.914,0.979
			c3.916,3.937,7.851,7.854,11.754,11.802c1.33,1.346,1.607,3.014,0.875,4.577c-0.799,1.71-2.592,2.834-4.351,2.713
			c-1.114-0.077-1.983-0.63-2.754-1.407c-2.956-2.974-5.968-5.895-8.862-8.925c-0.845-0.882-1.249-0.714-1.994,0.052
			c-2.973,3.062-5.995,6.075-9.034,9.072c-1.365,1.346-2.989,1.59-4.573,0.82c-1.683-0.814-2.753-2.533-2.671-4.262
			c0.058-1.166,0.632-2.06,1.434-2.858c3.877-3.869,7.742-7.75,11.608-11.628c0.257-0.257,0.495-0.53,0.868-0.93
			c-5.273-0.551-10.028-1.849-14.099-5.032c-0.506-0.396-1.027-0.778-1.487-1.222c-1.783-1.711-1.962-3.672-0.553-5.69
			c1.207-1.728,3.231-2.19,5.336-1.197c0.408,0.191,0.796,0.433,1.168,0.689c7.586,5.213,18.008,5.356,25.624,0.233
			c0.754-0.576,1.561-1.05,2.496-1.289c1.816-0.468,3.512,0.201,4.486,1.791C69.613,52.874,69.6,54.646,68.227,56.057z"
                />
              </g>
            </g>
          </svg>
        </Link>
        <Link href="https://t.me/klinika_sarBona_sar" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="hidden lg:block h-7 w-7 fill-current text-slate-700 transition-colors duration-300 hover:text-light-golden"
          >
            <path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
          </svg>
        </Link>

        <div className="hidden lg:flex">
          <button
            onClick={openPopup}
            className="px-4 py-4 bg-light-golden text-white rounded hover:bg-dark-golden transition duration-300"
          >
            Записаться на сеанс
          </button>
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
