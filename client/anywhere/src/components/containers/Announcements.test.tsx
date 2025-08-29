import { render, screen } from "@testing-library/react";
import Announcements from "./Announcements";
import type { IAnnouncement } from "./Announcements";

describe("Announcements", () => {
  it("renders skeletons when loading", () => {
    render(<Announcements announcements={[]} isLoading={true} />);
    expect(screen.getAllByTestId("skeleton")).toHaveLength(5);
  });

  it("renders empty state when no announcements", () => {
    render(<Announcements announcements={[]} isLoading={false} />);
    expect(screen.getByText(/No Announcemnets Now/i)).toBeInTheDocument();
    expect(
      screen.getByText(/You'll see the latest announcements here/i)
    ).toBeInTheDocument();
  });

  it("renders announcement cards when data exists", () => {
    const mockAnnouncements: IAnnouncement[] = [
      { announcer: "Omar Ali", title: "Math 101", body: "Exam next week" },
      { announcer: "Talia", title: "Physics 101", body: "Chapter 3 review" },
    ];

    render(
      <Announcements announcements={mockAnnouncements} isLoading={false} />
    );
    expect(screen.getByText("Math 101")).toBeInTheDocument();
    expect(screen.getByText("Physics 101")).toBeInTheDocument();
    expect(screen.getByText("Exam next week")).toBeInTheDocument();
    expect(screen.getByText("Chapter 3 review")).toBeInTheDocument();
  });
});
