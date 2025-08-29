import { render, screen, waitFor } from "@testing-library/react";
import Dashboard from "./Dashboard";
import fetchAnnouncements from "../../lib/data/announcements";
import fetchExams from "../../lib/data/exams";
import type { IAnnouncement } from "./Announcements";
import type { IExam } from "../cards/ExamCard";
import { vi } from "vitest";
import type { Mock } from "vitest";
import { MenuProvider } from "../../context/SideMenuContext";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../features/authSlice";

vi.mock("../../lib/data/announcements");
vi.mock("../../lib/data/exams");

const mockedFetchAnnouncements = fetchAnnouncements as Mock;
const mockedFetchExams = fetchExams as Mock;

function renderWithProviders(ui: React.ReactElement) {
  const store = configureStore({ reducer: { auth: authReducer } });

  return render(
    <Provider store={store}>
      <MenuProvider>{ui}</MenuProvider>
    </Provider>
  );
}

describe("Dashboard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders Navbar and ExamBanner", () => {
    renderWithProviders(<Dashboard />);
    expect(screen.getByText(/Welcome Talia,/i)).toBeInTheDocument();
    expect(screen.getByTestId("ExamBanner")).toBeInTheDocument();
  });

  it("renders loading skeletons initially", async () => {
    mockedFetchAnnouncements.mockResolvedValue([]);
    mockedFetchExams.mockResolvedValue([]);

    renderWithProviders(<Dashboard />);

    // Assuming skeletons have a testid of "skeleton"
    expect(screen.getAllByTestId("skeleton")).toHaveLength(5);
    expect(screen.getAllByTestId("exams-skeleton")).toHaveLength(5);

    await waitFor(() => {
      expect(screen.getByTestId("AnnouncementsList")).toBeInTheDocument();
      expect(screen.getByTestId("ExamsList")).toBeInTheDocument();
    });
  });

  it("renders fetched announcements and exams", async () => {
    const announcements: IAnnouncement[] = [
      { title: "test", body: "test body", announcer: "test announcer" },
      { title: "test2", body: "test2 body", announcer: "test2 announcer" },
    ];
    const exams: IExam[] = [
      { title: "testExam", dueDate: new Date(), topic: "Math" },
      { title: "testExam2", dueDate: new Date(), topic: "Science" },
    ];

    mockedFetchAnnouncements.mockResolvedValue(announcements);
    mockedFetchExams.mockResolvedValue(exams);

    renderWithProviders(<Dashboard />);

    await waitFor(() => {
      announcements.forEach((a) => {
        expect(screen.getByText(a.title)).toBeInTheDocument();
      });

      exams.forEach((e) => {
        expect(screen.getByText(e.title)).toBeInTheDocument();
      });
    });
  });
});
