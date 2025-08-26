import asyncHandler from "../utils/asyncHandler";
import { Request, Response } from "express";
import { QuizsService } from "../services/quiz-service";
import { SuccessResponse } from "../core/ApiResponse";

export const getQuiz = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const _id = req.query._id as string;
    const topic = req.query.topic as string;
    const course = req.query.course as string;
    const limit = Number(req.query.limit as string);
    const page = Number(req.query.page as string);
    const quizzes = await QuizsService.getQuiz(
      { _id, topic, course },
      limit,
      page
    );
    new SuccessResponse("Fetched Quizzes", quizzes).send(res);
  }
);

export const addQuiz = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const data = req.body;
    const quiz = await QuizsService.createQuiz(data);
    new SuccessResponse("Quiz Added", quiz).send(res);
  }
);

export const updateQuiz = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const data = req.body;
    const _id = req.params._id as string;
    const quiz = await QuizsService.updateQuiz(data, _id);
    new SuccessResponse("Quiz Updated", quiz).send(res);
  }
);

export const deleteQuiz = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const _id = req.params._id as string;
    const quiz = await QuizsService.deleteQuiz(_id);
    new SuccessResponse("Quiz Deleted", quiz).send(res);
  }
);
