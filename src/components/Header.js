import Link from "next/link";
import HeaderServices from "./HeaderServices";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white text-black py-12 md:py-4 z-[99] ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-grow flex items-center">
          <Link href="/">
            <img
              src="/logo.svg"
              alt="Клиника красоты SarBona"
              className="h-32 md:h-16 w-auto mr-8"
            />
          </Link>
          <nav>
            <ul className="flex space-x-3">
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
                  className="transition-colors duration-300 hover:text-light-golden flex items-center px-5 py-5"
                >
                  Врачи
                </a>
              </li>
              <li className="group relative">
                <a
                  href="#certificates"
                  className="transition-colors duration-300 hover:text-light-golden flex items-center px-5 py-5"
                >
                  Сертификаты
                </a>
              </li>
              <li className="group relative">
                <a
                  href="#reviews"
                  className="transition-colors duration-300 hover:text-light-golden flex items-center px-5 py-5"
                >
                  Отзывы
                </a>
              </li>
              <li className="group relative">
                <a
                  href="#contact"
                  className="transition-colors duration-300 hover:text-light-golden flex items-center px-5 py-5"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex">
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
