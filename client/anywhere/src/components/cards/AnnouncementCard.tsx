import type { IAnnouncement } from "../containers/Announcements";
import { AccountCircle } from "@mui/icons-material";

const AnnouncementCard = ({
  announcement,
}: {
  announcement: IAnnouncement;
}) => {
  return (
    <div className="flex flex-row w-full ">
      <div className="flex items-start">
        <AccountCircle fontSize="large"/>
        <div className="flex flex-col justify-start">
          <p className="text-lg">{announcement.announcer}</p>
          <p className="text-sm font-light">{announcement.title}</p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;
