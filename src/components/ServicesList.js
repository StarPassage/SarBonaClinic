import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const ServicesList = () => {
  return (
    <div className="bg-white">
      <h1 className="text-5xl md:text-5xl lg:text-6xl text-slate-700 text-left ml-[6%] mr-[4%] lg:mr-[52%] pt-[0.5em] pb-[2%] md:pb-0">
        Услуги
      </h1>
      <div className="grid grid-cols-1 md:flex md:flex-wrap gap-y-[3em] md:justify-between pt-[4%] mx-[6%]">
        <div className="md:w-[46%] md:h-[50%]">
          <Link href="#cosmetology">
            <Image
              src="/cosmetology-service.jpg"
              width={1000}
              height={1000}
              className="md:w-full md:h-full rounded-2xl"
            />
          </Link>
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-slate-700 mt-5 break-words">
            Косметология
          </h1>
          <h1 className="text-lg xl:text-xl text-slate-700 mt-5 break-words">
            Оживите свою кожу с помощью наших омолаживающих косметологических
            процедур, разработанных специально для вашей кожи.
          </h1>
          <Link
            href="#cosmetology"
            className="flex items-center justify-center border border-light-golden text-slate-700 text-center lg:text-lg py-4 mt-5 uppercase rounded hover:bg-light-golden transition duration-300"
          >
            Подробнее
            <svg
              className="ml-2 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="md:w-[46%] md:h-[50%]">
          <Link href="#nailservice">
            <Image
              src="/nails.jpg"
              width={1000}
              height={1000}
              className="md:w-full md:h-full rounded-2xl"
            />
          </Link>
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-slate-700 mt-5 break-words">
            Маникюр и педикюр
          </h1>
          <h1 className="text-lg xl:text-xl text-slate-700 mt-5 break-words">
            Побалуйте себя нашими профессиональными услугами по уходу за ногтями
            рук и ног.
          </h1>
          <Link
            href="#nailservice"
            className="flex items-center justify-center border border-light-golden text-slate-700 text-center lg:text-lg py-4 mt-5 md:mt-12 uppercase rounded hover:bg-light-golden transition duration-300"
          >
            Подробнее
            <svg
              className="ml-2 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="md:w-[46%] md:h-[50%]">
          <Link href="#hairdressing">
            <Image
              src="/hair.jpg"
              width={1000}
              height={1000}
              className="md:w-full md:h-full rounded-2xl"
            />
          </Link>
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-slate-700 mt-5 break-words">
            Парикмахерские услуги
          </h1>
          <h1 className="text-lg xl:text-xl text-slate-700 mt-5 break-words">
            Преобразите свой образ с помощью наших квалифицированных услуг по
            укладке волос для любого случая.
          </h1>
          <Link
            href="#hairdressing"
            className="flex items-center justify-center border border-light-golden text-slate-700 text-center lg:text-lg py-4 mt-5 uppercase rounded hover:bg-light-golden transition duration-300"
          >
            Подробнее
            <svg
              className="ml-2 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="md:w-[46%] md:h-[50%]">
          <Link href="#massage">
            <Image
              src="/beauty-spa.jpg"
              width={1000}
              height={1000}
              className="md:w-full md:h-full rounded-2xl"
            />
          </Link>
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-slate-700 mt-5 break-words">
            Массажи
          </h1>
          <h1 className="text-lg xl:text-xl text-slate-700 mt-5 break-words">
            Расслабьтесь с помощью нашего успокаивающего массажа, чтобы снять
            стресс и напряжение.
          </h1>
          <Link
            href="#massage"
            className="flex items-center justify-center border border-light-golden text-slate-700 text-center lg:text-lg py-4 mt-5 md:mt-12 uppercase rounded hover:bg-light-golden transition duration-300"
          >
            Подробнее
            <svg
              className="ml-2 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="md:w-[46%] md:h-[50%]">
          <Link href="#therapy">
            <Image
              src="/therapist.jpg"
              width={1000}
              height={1000}
              className="md:w-full md:h-full rounded-2xl"
            />
          </Link>
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-slate-700 mt-5 break-words">
            Терапия
          </h1>
          <h1 className="text-lg xl:text-xl text-slate-700 mt-5 break-words">
            Консультативный прием врача-терапевта с многолетним опытом работы.
          </h1>
          <Link
            href="#therapy"
            className="flex items-center justify-center border border-light-golden text-slate-700 text-center lg:text-lg py-4 mt-5 uppercase rounded hover:bg-light-golden transition duration-300"
          >
            Подробнее
            <svg
              className="ml-2 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <div className="md:w-[46%] md:h-[50%]">
          <Link href="#podology">
            <Image
              src="/podology.jpg"
              width={1000}
              height={1000}
              className="md:w-full md:h-full rounded-2xl"
            />
          </Link>
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-slate-700 mt-5 break-words">
            Подология
          </h1>
          <h1 className="text-lg xl:text-xl text-slate-700 mt-5 break-words">
            Лечение ногтевой пластины и стопы от различных заболеваний и
            повреждений.
          </h1>
          <Link
            href="#podology"
            className="flex items-center justify-center border border-light-golden text-slate-700 text-center lg:text-lg py-4 mt-5 uppercase rounded hover:bg-light-golden transition duration-300"
          >
            Подробнее
            <svg
              className="ml-2 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default ServicesList;
