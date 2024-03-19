import Link from "next/link";

const SubHeader = () => {
  return (
    <header className="sticky top-0 bg-white z-[99]">
      <div className="flex justify-between items-center text-sm md:px-[40px] xl:px-[125px] py-1">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center hover:text-dark-golden transition duration-300 mr-4"
          >
            <img src="/address-pin.svg" className="h-4 w-auto sm:mr-1" />
            г. Саратов, ул. Рахова, д. 61/71, пом. 1
          </Link>
          <div className="hidden md:flex items-center">
            <img src="/workinghours.svg" className="h-4 w-auto mr-1" />
            Работаем с 9:00 до 21:00
          </div>
        </div>
        <div className="flex items-center">
          <Link
            href="tel:+78452395556"
            className="flex items-center hover:text-dark-golden transition duration-300 mr-4"
          >
            <img src="/phone.svg" className="h-4 w-auto mr-1" />
            +7 (845) 239-55-56
          </Link>
          <Link
            href="tel:+79873577080"
            className="hidden md:flex items-center hover:text-dark-golden transition duration-300"
          >
            <img src="/phone.svg" className="h-4 w-auto mr-1" />
            +7 (987) 357-70-80
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SubHeader;
