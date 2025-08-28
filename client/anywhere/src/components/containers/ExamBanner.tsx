import BannerBtn from "../buttons/BannerBtn";

const ExamBanner = () => {
  return (
    <div className="flex flex-row justify-between bg-white rounded-xl shadow-lg px-4 py-4">
      <div className="flex flex-col px-8 py-4 space-y-3">
        <h1 className="text-5xl font-bold bg-gradient-to-br from-[#0B3C5D] to-[#338ec7] bg-clip-text text-transparent">
          Exams Time
        </h1>
        <p className="text-lg text-gray-700">
          Here we are, Are you ready to fight? Don't worry we prepared some tips
          to be ready for your exams.
        </p>
        <p className="text-md font-light italic">
          "Nothing happens until something moves" -Albert Einstein
        </p>
        <div className="flex w-full justify-start">
        <BannerBtn className="w-full md:w-auto"/>
        </div>
      </div>
      <div className="hidden md:flex w-1/2 justify-center items-center gap-4">
        <img
          src="/images/banner.svg"
          alt="exam illustration 1"
          className="w-1/2 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ExamBanner;
