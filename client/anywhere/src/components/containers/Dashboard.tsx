import Navbar from "./navigation/Navbar";
import ExamBanner from "./ExamBanner";
import Announcements from "./Announcements";
import Exams from "./Exams";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full bg-gray-200">
      <Navbar />
      <div className="py-4 px-3 h-full space-y-4 overflow-y-auto">
        <ExamBanner />
        <div className="flex flex-col md:flex-row md:space-x-2 space-y-4">
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
          <Exams 
            exams={[
              {
                title: "Math Exam",
                topic: "Chapter One",
                dueDate: new Date()
              },
              {
                title: "Physics Exam",
                topic: "Chapter One",
                dueDate: new Date()
              },
              {
                title: "English Exam",
                topic: "Chapter One",
                dueDate: new Date()
              },
            ]}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
