import { BadRequestError } from "../core/ApiError";
import Quiz, { IQuiz } from "../models/quiz";

export class QuizsService {
  static async getQuiz(
    data: { _id?: string; topic?: string; course: string },
    limit?: number,
    page?: number
  ): Promise<IQuiz[]> {
    if (data._id) {
      return (await Quiz.findById(data._id)) || [];
    }
    if (data.topic) {
      return await Quiz.find({
        topic: {
          $regex: data.topic,
          $options: "i",
        },
      });
    }
    if (data.course) {
      return await Quiz.find({
        course: {
          $regex: data.course,
          $options: "i",
        },
      });
    }

    limit = limit ? Math.min(limit, 100) : 100;
    page = page ? Math.min(page, 100) : 0;

    return await Quiz.find({})
      .limit(limit)
      .skip(limit * page);
  }

  static async createQuiz(data: {
    topic: string;
    examTime: number;
    course: string;
    dueDate: Date;
    questions: IQuiz["questions"];
    totalMark: number;
  }): Promise<IQuiz> {

    const QuizBody: Partial<IQuiz> = {
      topic: data.topic,
      examTime: data.examTime,
      course: data.course,
      dueDate: data.dueDate,
      questions: data.questions,
      totalMark: data.totalMark,
    };

    const quiz = new Quiz(QuizBody);
    await quiz.save();
    return quiz;
  }

  static async updateQuiz(
    data: {
    topic?: string;
    examTime?: number;
    course?: string;
    dueDate?: Date;
    questions?: IQuiz["questions"];
    totalMark?: number;
    },
    _id: string
  ): Promise<IQuiz> {
    const allowedUpdates = ["topic", "examTime", "course", "dueDate", "questions", "totalMark"];
    const updates = Object.keys(data);
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
      throw new BadRequestError("INVALID_UPDATES", "Invalid updates!");
    }

    const QuizBody: Partial<IQuiz> = {};

    if (data.topic) QuizBody.topic = data.topic;
    if (data.examTime) QuizBody.examTime = data.examTime;
    if (data.course) QuizBody.course = data.course;
    if (data.dueDate) QuizBody.dueDate = data.dueDate;
    if (data.questions) QuizBody.questions = data.questions;
    if (data.totalMark) QuizBody.totalMark = data.totalMark;

    const quiz = await Quiz.findByIdAndUpdate(_id, QuizBody, {
      new: true,
    });
    if (!quiz) throw new BadRequestError("INVALID_ID", "Invalid Quiz ID!");
    return quiz;
  }
  
  static async deleteQuiz(_id: string): Promise<IQuiz> {
    const quiz = await Quiz.findByIdAndDelete(_id);
    if (!quiz) throw new BadRequestError("INVALID_ID", "Invalid Quiz ID!");
    return quiz;
  }
}
