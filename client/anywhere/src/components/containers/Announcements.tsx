import AnnouncementCard from "../cards/AnnouncementCard";
import CardsHeader from "../cards/CardsHeader";

export type IAnnouncement = {
    announcer: string;
    title: string;
    body: string;
}
const Announcements = ({announcements}: {announcements: IAnnouncement[]}) => {
  return (
    <div className="flex flex-col justify-start space-y-4 bg-white rounded-xl shadow-lg px-4 py-4 w-full h-full">
        <CardsHeader title="Announcements"/>
        <div className="flex flex-col space-y-4 overflow-y-auto py-2">
            {announcements.map((announcement) => (
                <AnnouncementCard announcement={announcement}/>
            ))}
        </div>
    </div>
  )
}

export default Announcements
