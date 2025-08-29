import BannerBtn from "../buttons/BannerBtn";
import { useTranslation } from "react-i18next";

const ExamBanner = () => {
  const { t } = useTranslation();

  return (
    <div data-testid="ExamBanner" className="flex flex-row justify-between bg-white rounded-xl shadow-lg px-4 py-4">
      <div className="flex flex-col px-8 py-4 space-y-3">
        <h1 className="text-5xl font-bold bg-gradient-to-br from-[#0B3C5D] to-[#338ec7] bg-clip-text text-transparent">
          {t('exam.examsTime')}
        </h1>
        <p className="text-lg text-gray-700">
          {t('exam.examDescription')}
        </p>
        <p className="text-md font-light italic">
          {t('exam.einsteinQuote')}
        </p>
        <div className="flex w-full justify-start">
        <BannerBtn aria-label="Banner Button" className="w-full md:w-auto"/>
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
