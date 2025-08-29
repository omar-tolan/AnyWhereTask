import { useTranslation } from "react-i18next";

const BannerBtn = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <button
        className="bg-[#2575A6] text-white rounded-md w-full px-10 py-4 transition hover:opacity-90 cursor-pointer"
      >
        {t('exam.viewExamTips')}
      </button>
    </div>
  );
};

export default BannerBtn;
