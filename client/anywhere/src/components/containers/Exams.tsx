import Skeleton from "@mui/material/Skeleton";
import CardsHeader from "../cards/CardsHeader";
import type { IExam } from "../cards/ExamCard";
import ExamCard from "../cards/ExamCard";

const Exams = ({ exams, isLoading }: { exams: IExam[], isLoading: boolean }) => {
  return (
    <div data-testid="ExamsList" className="flex flex-col justify-start space-y-4 bg-white rounded-xl shadow-lg px-4 py-4 md:w-[40%] h-full w-full">
      <CardsHeader title="What's due" />
        {isLoading ? (
        <div className="flex flex-col space-y-2 ">
          <Skeleton data-testid="skeleton" variant="rounded" width="100%" height={40} />
          <Skeleton data-testid="skeleton" variant="rounded" width="100%" height={40} />
          <Skeleton data-testid="skeleton" variant="rounded" width="100%" height={40} />
          <Skeleton data-testid="skeleton" variant="rounded" width="100%" height={40} />
          <Skeleton data-testid="skeleton" variant="rounded" width="100%" height={40} />
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
