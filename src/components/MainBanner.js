import Link from "next/link";

const MainBanner = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <div className="absolute top-0 left-0 lg:w-1/2 h-full bg-white"></div>
        <video
          src="/light-canvas-video.mp4"
          autoPlay
          loop
          muted
          disablePictureInPicture
					playsInline
          className="absolute top-0 right-0 lg:w-1/2 h-full object-cover"
        />
      </div>
      <div className="relative h-[75vh] md:h-[70vh]">
        <h1 className="text-5xl md:text-5xl lg:text-6xl text-slate-700 text-left ml-[6%] mr-[4%] lg:mr-[52%] pt-[6%] font-bold">
          Откройте для себя свою истинную красоту
        </h1>
        <h1 className="text-lg md:text-xl lg:text-xl text-slate-700 text-left ml-[6%] mr-[4%] md:mr-[55%] pt-[5%]">
          Ознакомьтесь с ассортиментом процедур премиум-класса в клинике
          SarBona, разработанных специально для усиления вашего естественного
          очарования. Примите себя новой.
        </h1>
        <div className="sm:ml-[6%] mt-[5%] lg:mt-[50px] md:mr-[30%] flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="#appointment"
            className="px-6 py-6 bg-light-golden text-white rounded hover:bg-dark-golden transition duration-300"
          >
            Записаться на сеанс
          </Link>
          <Link
            href="#hotdeals"
            className="px-6 py-6 bg-rose-500 text-white rounded hover:bg-rose-600 transition duration-300"
          >
            Горячие акции
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
