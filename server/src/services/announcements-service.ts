import { BadRequestError } from "../core/ApiError";
import Announcement, { IAnnouncement } from "../models/announcement";

export class AnnouncementsService {
  static async getAnnouncement(
    data: { _id?: string; title?: string },
    limit?: number,
    page?: number
  ): Promise<IAnnouncement[]> {
    if (data._id) {
      return (await Announcement.findById(data._id)) || [];
    }
    if (data.title) {
      return await Announcement.find({
        title: {
          $regex: data.title,
          $options: "i",
        },
      });
    }

    limit = limit ? Math.min(limit, 100) : 100;
    page = page ? Math.min(page, 100) : 0;

    return await Announcement.find({})
      .limit(limit)
      .skip(limit * page);
  }

  static async createAnnouncement(data: {
    title: string;
    body: string;
    announcer: string;
  }): Promise<IAnnouncement> {
    const announcementBody: Partial<IAnnouncement> = {
      title: data.title,
      announcer: data.announcer,
      body: data.body,
    };
    const announcement = new Announcement(announcementBody);
    await announcement.save();
    return announcement;
  }

  static async updateAnnouncement(
    data: {
      title?: string;
      body?: string;
      announcer?: string;
    },
    _id: string
  ): Promise<IAnnouncement> {
    const allowedUpdates = ["title", "body", "announcer"];
    const updates = Object.keys(data);
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
      throw new BadRequestError("INVALID_UPDATES", "Invalid updates!");
    }

    const announcementBody: Partial<IAnnouncement> = {};

    if (data.title) announcementBody.title = data.title;
    if (data.body) announcementBody.body = data.body;
    if (data.announcer) announcementBody.announcer = data.announcer;

    const announcement = await Announcement.findByIdAndUpdate(
      _id,
      announcementBody,
      {
        new: true,
      }
    );
    if (!announcement)
      throw new BadRequestError("INVALID_ID", "Invalid Announcement ID!");
    return announcement;
  }

  static async deleteAnnouncement(_id: string): Promise<IAnnouncement> {
    const announcement = await Announcement.findByIdAndDelete(_id);
    if (!announcement)
      throw new BadRequestError("INVALID_ID", "Invalid Announcement ID!");
    return announcement;
  }
}
