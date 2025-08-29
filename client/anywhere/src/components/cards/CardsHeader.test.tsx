import { render, screen } from "@testing-library/react";
import CardsHeader from "./CardsHeader";

describe("CardsHeader", () => {
  it("renders the given title", () => {
    render(<CardsHeader title="Announcements" />);
    expect(screen.getByText("Announcements")).toBeInTheDocument();
  });

  it('always renders the "All" link', () => {
    render(<CardsHeader title="Exams" />);
    expect(screen.getByText("All")).toBeInTheDocument();
  });

  it("applies correct classes to title and link", () => {
    render(<CardsHeader title="Exams" />);
    expect(screen.getByText("Exams")).toHaveClass(
      "text-lg",
      "font-bold",
      "text-gray-800"
    );
    expect(screen.getByText("All")).toHaveClass(
      "text-blue-600",
      "cursor-pointer"
    );
  });
});
