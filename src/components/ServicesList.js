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
          <Image
            src="/cosmetology-service.jpg"
            width={1000}
            height={1000}
            className="md:w-[100%] md:h-[100%] rounded-2xl"
          />
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-slate-700 mt-5 break-words">
            Косметология
          </h1>
          <h1 className="text-lg xl:text-xl text-slate-700 mt-5 break-words">
            Оживите свою кожу с помощью наших омолаживающих косметологических
            процедур, разработанных специально для вашей кожи.
          </h1>
        </div>
        <div className="md:w-[46%] md:h-[50%]">
          <Image
            src="/nails.jpg"
            width={1000}
            height={1000}
            className="md:w-[100%] md:h-[100%] rounded-2xl"
          />
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-slate-700 mt-5 break-words">
            Маникюр и педикюр
          </h1>
          <h1 className="text-lg xl:text-xl text-slate-700 mt-5 break-words">
            Побалуйте себя нашими профессиональными услугами по уходу за ногтями
            рук и ног.
          </h1>
        </div>
        <div className="md:w-[46%] md:h-[50%]">
          <Image
            src="/hair.jpg"
            width={1000}
            height={1000}
            className="md:w-[100%] md:h-[100%] rounded-2xl"
          />
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-slate-700 mt-5 break-words">
            Парикмахерские услуги
          </h1>
          <h1 className="text-lg xl:text-xl text-slate-700 mt-5 break-words">
            Преобразите свой образ с помощью наших квалифицированных услуг по
            укладке волос для любого случая.
          </h1>
        </div>
        <div className="md:w-[46%] md:h-[50%]">
          <Image
            src="/beauty-spa.jpg"
            width={1000}
            height={1000}
            className="md:w-[100%] md:h-[100%] rounded-2xl"
          />
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-slate-700 mt-5 break-words">
            Массажи
          </h1>
          <h1 className="text-lg xl:text-xl text-slate-700 mt-5 break-words">
            Расслабьтесь с помощью нашего успокаивающего массажа, чтобы снять
            стресс и напряжение.
          </h1>
        </div>
        <div className="md:w-[46%] md:h-[50%]">
          <Image
            src="/therapist.jpg"
            width={1000}
            height={1000}
            className="md:w-[100%] md:h-[100%] rounded-2xl"
          />
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-slate-700 mt-5 break-words">
            Терапия
          </h1>
          <h1 className="text-lg xl:text-xl text-slate-700 mt-5 break-words">
            Консультативный прием врача-терапевта с многолетним опытом работы.
          </h1>
        </div>
        <div className="md:w-[46%] md:h-[50%]">
          <Image
            src="/podology.jpg"
            width={1000}
            height={1000}
            className="md:w-[100%] md:h-[100%] rounded-2xl"
          />
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-slate-700 mt-5 break-words">
            Подология
          </h1>
          <h1 className="text-lg xl:text-xl text-slate-700 mt-5 break-words">
            Лечение ногтевой пластины и стопы от различных заболеваний и
            повреждений.
          </h1>
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default ServicesList;
