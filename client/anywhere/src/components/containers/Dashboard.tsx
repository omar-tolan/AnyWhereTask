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
    fetchAnnouncements().then((announcements) =>
      setAnnouncements(announcements)
    );
    fetchExams().then((exams) => setExams(exams));
  }, []);
  return (
    <div className="flex flex-col w-full bg-gray-200">
      <Navbar />
      <div className="py-4 px-3 h-full space-y-4 overflow-y-auto">
        <ExamBanner />
        <div className="flex flex-col md:flex-row md:space-x-2 space-y-4">
          <Announcements
            announcements={announcements}
          />
          <Exams exams={exams} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
