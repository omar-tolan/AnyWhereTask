import AnnouncementCard from "../cards/AnnouncementCard";

export type IAnnouncement = {
    announcer: string;
    title: string;
    body: string;
}
const Announcements = ({announcements}: {announcements: IAnnouncement[]}) => {
  return (
    <div className="flex flex-col justify-start space-y-4 bg-white rounded-xl shadow-lg px-4 py-4 w-full h-full">
        <div className="flex justify-between w-full">
            <h2 className="text-lg font-bold text-gray-800">Announcements</h2>
            <p className="text-blue-600">All</p>
        </div>
        <div className="flex flex-col space-y-4">
            {announcements.map((announcement) => (
                <AnnouncementCard announcement={announcement}/>
            ))}
        </div>
    </div>
  )
}

export default Announcements
