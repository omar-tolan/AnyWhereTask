import Skeleton from "@mui/material/Skeleton";
import AnnouncementCard from "../cards/AnnouncementCard";
import CardsHeader from "../cards/CardsHeader";
import { useTranslation } from "react-i18next";

export type IAnnouncement = {
  announcer: string;
  title: string;
  body: string;
};
const Announcements = ({
  announcements,
  isLoading,
}: {
  announcements: IAnnouncement[];
  isLoading: boolean;
}) => {
  const { t } = useTranslation();
  return (
    <div data-testid="AnnouncementsList" className="flex flex-col justify-start space-y-4 bg-white rounded-xl shadow-lg px-4 py-4 w-full h-full">
      <CardsHeader title={t('common.announcementHeader')} />
      {isLoading ? (
        <div className="flex flex-col space-y-2 ">
          <Skeleton data-testid="skeleton" variant="rounded" width="100%" height={40} />
          <Skeleton data-testid="skeleton" variant="rounded" width="100%" height={40} />
          <Skeleton data-testid="skeleton" variant="rounded" width="100%" height={40} />
          <Skeleton data-testid="skeleton" variant="rounded" width="100%" height={40} />
          <Skeleton data-testid="skeleton" variant="rounded" width="100%" height={40} />
        </div>
      ) : (
        <div className="flex flex-col space-y-4 overflow-y-auto py-2">
          {announcements.length === 0 ? (
            <div className="flex flex-col">
              <p className="text-lg font-normal">No Announcemnets Now</p>
              <p className="text-md font-extralight">
                You'll see the latest announcements here.
              </p>
            </div>
          ) : (
            announcements.map((announcement) => (
              <AnnouncementCard key={announcement.title} announcement={announcement} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Announcements;
