import { Router } from "express";
import quizRoutes from "./quiz-routes";
import announcementsRoutes from "./announcements-routes";

const router = Router();

router.use("/quiz", quizRoutes);
router.use("/announcement", announcementsRoutes);

export default router;