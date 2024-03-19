import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const ServicesList = () => {
  return (
    <div className="bg-white">
      <h1 className="text-5xl md:text-5xl lg:text-6xl text-slate-700 text-left ml-[6%] mr-[4%] lg:mr-[52%] pt-[0.5em] pb-[2%] md:pb-0">
        Услуги
      </h1>
      <div className="flex flex-wrap gap-y-[3em] justify-between pt-[4%] mx-[6%]">
        <div className="w-[46%] h-[50%]">
          <Image
            src="https://source.unsplash.com/random/900x900/?facial+treatment+beauty"
            unoptimized
            width={0}
            height={0}
            className="w-[100%] h-[100%]"
          />
          <h1 className="text-2xl md:text-4xl xl:text-5xl text-slate-700 mt-5">
            Уход за лицом
          </h1>
          <h1 className="text-base md:text-lg xl:text-xl text-slate-700 mt-5">
            Оживите свою кожу с помощью наших омолаживающих процедур для лица,
            разработанных специально для вашей кожи.
          </h1>
        </div>
        <div className="w-[46%] h-[50%]">
          <Image
            src="https://source.unsplash.com/random/900x900/?nail+service"
            unoptimized
            width={0}
            height={0}
            className="w-[100%] h-[100%]"
          />
          <h1 className="text-2xl md:text-4xl xl:text-5xl text-slate-700 mt-5">
            Маникюр и педикюр
          </h1>
          <h1 className="text-base md:text-lg xl:text-xl text-slate-700 mt-5">
            Побалуйте себя нашими профессиональными услугами по уходу за ногтями
            рук и ног.
          </h1>
        </div>
        <div className="w-[46%] h-[50%]">
          <Image
            src="https://source.unsplash.com/random/900x900/?hairdressing"
            unoptimized
            width={0}
            height={0}
            className="w-[100%] h-[100%]"
          />
          <h1 className="text-2xl md:text-4xl xl:text-5xl text-slate-700 mt-5">
            Парикмахерские услуги
          </h1>
          <h1 className="text-base md:text-lg xl:text-xl text-slate-700 mt-5">
            Преобразите свой образ с помощью наших квалифицированных услуг по
            укладке волос для любого случая.
          </h1>
        </div>
        <div className="w-[46%] h-[50%]">
          <Image
            src="https://source.unsplash.com/random/900x900/?body+massage"
            unoptimized
            width={0}
            height={0}
            className="w-[100%] h-[100%]"
          />
          <h1 className="text-2xl md:text-4xl xl:text-5xl text-slate-700 mt-5">
            Массажи
          </h1>
          <h1 className="text-base md:text-lg xl:text-xl text-slate-700 mt-5">
            Расслабьтесь с помощью нашего успокаивающего массажа, чтобы снять
            стресс и напряжение.
          </h1>
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default ServicesList;
