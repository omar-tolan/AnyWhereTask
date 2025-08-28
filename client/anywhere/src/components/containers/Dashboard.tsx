import Navbar from "./navigation/Navbar";
import ExamBanner from "./ExamBanner";
import Announcements, { type IAnnouncement } from "./Announcements";
import Exams from "./Exams";
import { useEffect, useState } from "react";
import fetchAnnouncements from "../../lib/data/announcements";
import fetchExams from "../../lib/data/exams";
import type { IExam } from "../cards/ExamCard";

const Dashboard = () => {
  const [announcementsLoading, setAnnouncementsLoading] =
    useState<boolean>(false);
  const [examsLoading, setExamsLoading] = useState<boolean>(false);
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);
  const [exams, setExams] = useState<IExam[]>([]);

  useEffect(() => {
    setAnnouncementsLoading(true);
    setExamsLoading(true);
    fetchAnnouncements().then((announcements) =>
      setAnnouncements(announcements)
    );
    fetchExams().then((exams) => setExams(exams));
    setAnnouncementsLoading(false);
    setExamsLoading(false);
  }, []);
  return (
    <div className="flex flex-col w-full bg-gray-200">
      <Navbar />
      <div className="py-4 px-3 h-full space-y-4 overflow-y-auto">
        <ExamBanner />
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4">
          <Announcements
            announcements={announcements}
            isLoading={announcementsLoading}
          />
          <Exams exams={exams} isLoading={examsLoading} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
