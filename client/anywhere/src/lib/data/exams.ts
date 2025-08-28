import type { IExam } from "../../components/cards/ExamCard";
const apiUrl = import.meta.env.VITE_API_URL;
const fetchExams = async () => {
  try {
    const res = await fetch(`${apiUrl}/quiz`);
    const parsedRes = await res.json();
    console.log(parsedRes);
    let exams: IExam[] = [];
    parsedRes.data.forEach((exam: any) => {
      let parsedExam: IExam = {
        topic: exam.topic,
        dueDate: new Date(exam.dueDate),
        title: exam.course,
      };
      exams.push(parsedExam);
    });
    return exams
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default fetchExams;
