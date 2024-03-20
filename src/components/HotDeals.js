import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useAppointmentForm } from "../providers/AppointmentPopupFormContext";

const HotDeals = () => {
  const { openPopup } = useAppointmentForm();
  return (
    <div className="bg-white" id="hotdeals">
      <h1 className="text-5xl md:text-5xl lg:text-6xl text-slate-700 text-left ml-[6%] mr-[4%] lg:mr-[52%] pt-[0.5em] pb-[2%] md:pb-0">
        Акции
      </h1>
      <div className="mt-[2%] mx-[12%] md:mx-[6%]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="relative">
                <Image
                  src="https://source.unsplash.com/random/1200x600/?autumn+beauty"
                  unoptimized
                  width={0}
                  height={0}
                  className="w-full h-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 w-full">
                  <p className=" text-white text-xl md:text-5xl mx-[5%] mt-[5%] font-bold">
                    Весна в косметологии!
                  </p>
                  <p className="text-white md:text-3xl mx-[5%] mt-[2%]">
                    Акции на всю весну
                  </p>
                  <button
                    onClick={openPopup}
                    className="mt-[5%] mx-[5%] inline-block bg-light-golden text-white rounded px-2 py-4 md:px-6 md:py-6 hover:bg-dark-golden transition duration-300"
                  >
                    Записаться на сеанс
                  </button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative">
                <Image
                  src="/consultation-2.jpg"
                  width={1000}
                  height={1000}
                  className="w-full h-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 w-full">
                  <p className=" text-white text-lg md:text-5xl mx-[5%] mt-[5%] font-bold">
                    Бесплатная консультация врача-косметолога в Саратове
                  </p>
                  <p className="text-white text-sm md:text-3xl mx-[5%] mt-[2%]">
                    Консультация бесплатна при проведении косметологических
                    процедур в день приема
                  </p>
                  <button
                    onClick={openPopup}
                    className="mt-[5%] mx-[5%] inline-block bg-light-golden text-white text-base rounded px-2 py-4 md:px-6 md:py-6 hover:bg-dark-golden transition duration-300"
                  >
                    Записаться на сеанс
                  </button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="mt-[3em] mx-[6%]">
        <Separator />
      </div>
    </div>
  );
};

export default HotDeals;
