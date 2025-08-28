import type { IAnnouncement } from "../../components/containers/Announcements";
const apiUrl = import.meta.env.VITE_API_URL;
const fetchAnnouncements = async () => {
  try {
    let announcements: IAnnouncement[] = [];
    const res = await fetch(`${apiUrl}/announcement`);
    const parsedRes = await res.json();
    parsedRes.data.forEach((announcement: any) => {
        let parsedAnnouncement: IAnnouncement = {
            announcer: announcement.announcer,
            body: announcement.body,
            title: announcement.title
        };
        announcements.push(parsedAnnouncement);
    })
    return announcements;
  } catch (error) {
    console.log(error)
    throw error
  }
};

export default fetchAnnouncements