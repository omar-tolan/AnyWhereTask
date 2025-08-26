import mongoose, { Model, Schema, Document } from "mongoose";

export interface IAnnouncement extends Document {
  title: string;
  announcer: string;
  announcerImg: string;
  body: string;
  createdAt: Date;
}

type AnnouncementModel = Model<IAnnouncement>;

const AnnouncementSchema: Schema<IAnnouncement> = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 100,
  },
  body:{
    type: String,
    required: true,
    minlength: 10,
    maxLength: 1500,
  },
  announcer: {
    type: String,
    maxLength: 20,
    default: "Anonymous"
  },
  announcerImg: {
    type: String,
    default: "empty-avatar",
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Announcement = mongoose.model<IAnnouncement, AnnouncementModel>("Announcement", AnnouncementSchema);

export default Announcement;