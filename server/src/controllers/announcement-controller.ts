import asyncHandler from "../utils/asyncHandler";
import { Request, Response } from "express";
import { AnnouncementsService } from "../services/announcements-service";
import { SuccessResponse } from "../core/ApiResponse";

export const getAnnouncement = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const _id = req.query._id as string;
    const title = req.query.title as string;
    const limit = Number(req.query.limit as string);
    const page = Number(req.query.page as string);
    const announcements = await AnnouncementsService.getAnnouncement(
      { _id, title },
      limit,
      page
    );
    new SuccessResponse("Fetched Announcements", announcements).send(res);
  }
);

export const addAnnouncement = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const data = req.body;
    const announcement = await AnnouncementsService.createAnnouncement(data);
    new SuccessResponse("Announcement Added", announcement).send(res);
  }
);

export const updateAnnouncement = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const data = req.body;
    const _id = req.params._id as string;
    const announcement = await AnnouncementsService.updateAnnouncement(data, _id);
    new SuccessResponse("Announcement Updated", announcement).send(res);
  }
);

export const deleteAnnouncement = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const _id = req.params._id as string;
    const announcement = await AnnouncementsService.deleteAnnouncement(_id);
    new SuccessResponse("Announcement Deleted", announcement).send(res);
  }
);
