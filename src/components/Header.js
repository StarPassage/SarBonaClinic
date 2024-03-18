import Link from "next/link";
import HeaderServices from "./HeaderServices";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white text-black md:py-4 z-[99]">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4 md:p-0">
        <Link href="/">
          <img
            src="/logo.svg"
            alt="Клиника красоты SarBona"
            className="h-16 w-auto mr-8"
          />
        </Link>

        {/* Appointment button for mobile, centered */}
        <div className="md:hidden flex flex-grow justify-center mr-5">
          <Link
            href="#appointment"
            className="px-4 py-4 bg-light-golden text-white rounded hover:bg-dark-golden transition duration-300"
          >
            Записаться на сеанс
          </Link>
        </div>

        {/* Hamburger menu button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          &#9776;
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:flex w-full md:w-auto ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <nav className="w-full md:flex md:items-center md:justify-between">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
              <HeaderServices />
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
              <li className="group relative">
                <a
                  href="#certificates"
                  className="transition-colors duration-300 hover:text-light-golden flex items-center px-5 py-5 text-3xl md:text-base"
                >
                  Сертификаты
                </a>
              </li>
              <li className="group relative">
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
        <div className="hidden md:flex">
          <Link
            href="#appointment"
            className="px-4 py-4 bg-light-golden text-white rounded hover:bg-dark-golden transition duration-300"
          >
            Записаться на сеанс
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
