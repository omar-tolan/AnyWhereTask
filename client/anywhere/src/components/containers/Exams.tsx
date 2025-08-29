import Skeleton from "@mui/material/Skeleton";
import CardsHeader from "../cards/CardsHeader";
import type { IExam } from "../cards/ExamCard";
import ExamCard from "../cards/ExamCard";
import { useTranslation } from "react-i18next";

const Exams = ({ exams, isLoading }: { exams: IExam[], isLoading: boolean }) => {
  const { t } = useTranslation();
  return (
    <div data-testid="ExamsList" className="flex flex-col justify-start space-y-4 bg-white rounded-xl shadow-lg px-4 py-4 md:w-[40%] h-full w-full">
      <CardsHeader title={t('common.examsHeader')} />
        {isLoading ? (
        <div className="flex flex-col space-y-2 ">
          <Skeleton data-testid="exams-skeleton" variant="rounded" width="100%" height={40} />
          <Skeleton data-testid="exams-skeleton" variant="rounded" width="100%" height={40} />
          <Skeleton data-testid="exams-skeleton" variant="rounded" width="100%" height={40} />
          <Skeleton data-testid="exams-skeleton" variant="rounded" width="100%" height={40} />
          <Skeleton data-testid="exams-skeleton" variant="rounded" width="100%" height={40} />
        </div>
      ) : (
      <div className="flex flex-col space-y-4">
        {exams.length === 0 ? (
          <div className="flex flex-col">
            <p className="text-lg font-normal">Nothing's due now'</p>
            <p className="text-md font-extralight">
              You'll see your next quizzes here.
            </p>
          </div>
        ) : (
          exams.map((exam) => <ExamCard exam={exam} />)
        )}
      </div>
      )}
    </div>
  );
};

export default Exams;
