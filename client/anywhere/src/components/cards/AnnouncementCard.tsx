import type { IAnnouncement } from "../containers/Announcements";
import { AccountCircle } from "@mui/icons-material";

const AnnouncementCard = ({
  announcement,
}: {
  announcement: IAnnouncement;
}) => {
  return (
    <div className="flex flex-col space-y-2 md:flex-row w-full justify-between space-x-2">
      <div className="flex items-center space-x-2 md:min-w-[12%]">
        <AccountCircle fontSize="large"/>
        <div className="flex flex-col justify-start">
          <p className="text-sm font-semibold">{announcement.announcer}</p>
          <p className="text-sm font-light">{announcement.title}</p>
        </div>
      </div>
      <div className="w-full px-4 py-0 text-start items-center text-sm text-gray-700 border-l-1 border-gray-600">
        <p>{announcement.body}</p>
      </div>
    </div>
  );
};

export default AnnouncementCard;
