import express from "express";
import {
    getQuiz,
    addQuiz,
    deleteQuiz,
    updateQuiz
} from "../controllers/quiz-controller"

const quizRoutes = express.Router();

quizRoutes.get("", getQuiz);
quizRoutes.post("", addQuiz);
quizRoutes.patch("/:_id", updateQuiz);
quizRoutes.delete("/:_id", deleteQuiz)

export default quizRoutes;
