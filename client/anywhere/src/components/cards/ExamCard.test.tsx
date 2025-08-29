import { render, screen } from "@testing-library/react";
import ExamCard from "./ExamCard";
import type {IExam} from "./ExamCard"

const mockExam: IExam = {
  title: "Math Exam",
  topic: "Algebra",
  dueDate: new Date("2025-09-01T12:00:00Z"),
};

describe("ExamCard", () => {
  it("renders exam title", () => {
    render(<ExamCard exam={mockExam} />);
    expect(screen.getByText("Math Exam")).toBeInTheDocument();
  });

  it("renders exam topic", () => {
    render(<ExamCard exam={mockExam} />);
    expect(screen.getByText(/Topic: Algebra/)).toBeInTheDocument();
  });

  it("renders exam due date", () => {
    render(<ExamCard exam={mockExam} />);
    expect(
      screen.getByText((content) =>
        content.includes(mockExam.dueDate.toDateString())
      )
    ).toBeInTheDocument();
  });

  it("renders the Start Exam button", () => {
    render(<ExamCard exam={mockExam} />);
    expect(
      screen.getByRole("button", { name: /Start Exam/i })
    ).toBeInTheDocument();
  });
});
