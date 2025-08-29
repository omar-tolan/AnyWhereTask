import mongoose, { Model, Schema, Document } from "mongoose";

export interface IQuestion {
  question: string;
  mark: number;
}
export interface IQuiz extends Document {
  title: string;
  topic: string;
  examTime: number;
  course: string;
  dueDate: Date;
  questions: IQuestion[];
  totalMark: number;
}

type QuizModel = Model<IQuiz>;

const QuestionSchema: Schema<IQuestion> = new Schema({
  question: {
    type: String,
    minLength: 10,
    maxLength: 200,
    required: true,
  },
  mark: {
    type: Number,
    min: 1,
    max: 100,
    default: 1,
  },
});

const QuizSchema: Schema<IQuiz> = new Schema({
    title: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 150,
  },
  topic: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 150,
  },
  examTime: {
    type: Number,
    min: 15 * 60,
    max: 60 * 60 * 6,
    required: true,
  },
  course: {
    type: String,
    maxLength: 100,
    default: "General Exam",
  },
  dueDate: {
    type: Date,
    required: true,
    validate: (date: Date) => {
      date > new Date();
    },
  },
  questions: [QuestionSchema],
  totalMark: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
});

const Quiz = mongoose.model<IQuiz, QuizModel>("Quiz", QuizSchema);

export default Quiz;
