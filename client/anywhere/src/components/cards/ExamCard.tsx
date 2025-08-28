import { HourglassBottom } from "@mui/icons-material";
import ExamBtn from "../buttons/ExamBtn";
export type IExam = {
  title: string;
  topic: string;
  dueDate: Date;
};

const ExamCard = ({ exam }: { exam: IExam }) => {
  return (
    <div className="flex flex-col border-b-1 border-gray-400 p-4">
      <div className="flex items-start px-1 text-md font-semibold mb-1">
        <HourglassBottom sx={{ color: "#2575A6" }} />
        {exam.title}
      </div>
      <div className="flex flex-col text-xs space-y-1">
        <p>Topic: {exam.topic}</p>
        <p>Due Date: {exam.dueDate.toDateString()}</p>
        <ExamBtn className="mt-2"/>
      </div>
    </div>
  );
};

export default ExamCard;
