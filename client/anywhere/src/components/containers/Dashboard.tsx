import Navbar from "./navigation/Navbar";
import ExamBanner from "./ExamBanner";
import Announcements from "./Announcements";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full bg-gray-200">
      <Navbar />
      <div className="py-4 px-3 h-full space-y-4">
        <ExamBanner />
        <div className="flex space-x-2">
          <Announcements
            announcements={[
              {
                announcer: "Omar Ali Hussien",
                title: "Math 101",
                body: "This is a test announcement body",
              },
              {
                announcer: "Ali",
                title: "Pysics 101",
                body: "This is a test announcement body",
              },
              {
                announcer: "Mohamed",
                title: "English 101",
                body: "This is a test announcement body",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
