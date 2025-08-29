import { useTranslation } from "react-i18next";

const ExamBtn = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <button
        className="text-[#2575A6] text-lg border-2 rounded-md w-full py-1 transition hover:bg-[#2575A6] hover:text-white cursor-pointer"
      >
       {t('exam.startExam')}
      </button>
    </div>
  );
};

export default ExamBtn;
