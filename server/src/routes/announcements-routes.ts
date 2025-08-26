import express from "express";
import {
    getAnnouncement,
    addAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
} from "../controllers/announcement-controller"

const announcementsRoutes = express.Router();

announcementsRoutes.get("", getAnnouncement);
announcementsRoutes.post("", addAnnouncement);
announcementsRoutes.patch("/:_id", updateAnnouncement);
announcementsRoutes.delete("/:_id", deleteAnnouncement)

export default announcementsRoutes;
