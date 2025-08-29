import type { IAnnouncement } from "../containers/Announcements";
import { AccountCircle } from "@mui/icons-material";

const AnnouncementCard = ({
  announcement,
}: {
  announcement: IAnnouncement;
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-between space-x-4 py-2">
      <div className="flex items-center space-x-2 w-56 flex-shrink-0">
        <AccountCircle fontSize="large" />
        <div className="flex flex-col justify-start overflow-hidden">
          <p className="text-sm font-semibold truncate">
            {announcement.announcer}
          </p>
          <p className="text-sm font-light truncate">{announcement.title}</p>
        </div>
      </div>

      <div className="flex-1 px-4 text-sm text-gray-700 border-l border-gray-300">
        <p className="break-words">{announcement.body}</p>
      </div>
    </div>
  );
};

export default AnnouncementCard;
