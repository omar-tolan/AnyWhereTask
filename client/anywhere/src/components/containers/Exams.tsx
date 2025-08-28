import CardsHeader from "../cards/CardsHeader"
import type { IExam } from "../cards/ExamCard"
import ExamCard from "../cards/ExamCard"

const Exams = ({exams}: {exams: IExam[]}) => {
  return (
    <div className="flex flex-col justify-start space-y-4 bg-white rounded-xl shadow-lg px-4 py-4 md:w-[40%] h-full w-full">
      <CardsHeader title="What's due" />
      <div className="flex flex-col space-y-4">
        {exams.map((exam) => (
            <ExamCard exam={exam} />
        ))}
      </div>
    </div>
  )
}

export default Exams
