import { render, screen } from "@testing-library/react";
import AnnouncementCard from "./AnnouncementCard";
import type { IAnnouncement } from "../containers/Announcements";

const mockAnnouncement: IAnnouncement = {
  announcer: "Omar Ali",
  title: "Math 101",
  body: "This is a test announcement body that should render properly.",
};

describe("AnnouncementCard", () => {
  it("renders announcer, title, and body", () => {
    render(<AnnouncementCard announcement={mockAnnouncement} />);

    expect(screen.getByText("Omar Ali")).toBeInTheDocument();
    expect(screen.getByText("Math 101")).toBeInTheDocument();
    expect(
      screen.getByText(/This is a test announcement body/)
    ).toBeInTheDocument();
  });

  it("applies truncation styles for announcer and title", () => {
    render(<AnnouncementCard announcement={mockAnnouncement} />);

    const announcer = screen.getByText("Omar Ali");
    const title = screen.getByText("Math 101");

    expect(announcer).toHaveClass("truncate");
    expect(title).toHaveClass("truncate");
  });

  it("places body inside bordered section", () => {
    render(<AnnouncementCard announcement={mockAnnouncement} />);
    const bodyWrapper = screen.getByText(/test announcement body/).parentElement;

    expect(bodyWrapper).toHaveClass("border-l");
    expect(bodyWrapper).toHaveClass("border-gray-300");
  });
});
