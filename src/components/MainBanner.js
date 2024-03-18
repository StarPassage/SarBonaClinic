import Link from "next/link";

const MainBanner = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <div className="absolute top-0 left-0 w-[50%] h-full bg-white"></div>
        <video
          src="/light-canvas-video.mp4"
          autoPlay
          loop
          muted
          disablePictureInPicture
          className="absolute top-0 right-0 w-[50%] h-full object-cover"
        />
      </div>
      <div className="relative h-[70vh]">
        <h1 className="text-8xl md:text-7xl lg:text-6xl text-slate-700 text-left ml-[6%] md:mr-[50%] pt-[6%] font-bold">
          Откройте для себя свою истинную красоту
        </h1>
        <h1 className="text-2xl md:text-xl lg:text-xl text-slate-700 text-left ml-[6%] mr-[55%] pt-20">
          Ознакомьтесь с ассортиментом процедур премиум-класса в клинике
          SarBona, разработанных специально для усиления вашего естественного
          очарования. Примите себя новой.
        </h1>
        <div className="ml-[6%] mt-[50px] flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="#appointment"
            className="px-6 py-6 bg-light-golden text-white rounded hover:bg-dark-golden transition duration-300 font-bold"
          >
            Записаться на сеанс
          </Link>
          <Link
            href="#appointment"
            className="px-6 py-6 bg-rose-500 text-white rounded hover:bg-rose-600 transition duration-300 font-bold"
          >
            Горячие акции
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
