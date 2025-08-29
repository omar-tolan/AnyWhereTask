import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Exams from "./Exams";
import { vi } from "vitest";

// Mock ExamCard to simplify testing
vi.mock("../cards/ExamCard", () => ({
  default: (props: any) => <div data-testid="ExamCard">{props.exam.title}</div>,
}));

describe("Exams", () => {
  const examsMock = [
    { title: "testExam", dueDate: new Date(), topic: "Math" },
    { title: "testExam2", dueDate: new Date(), topic: "Science" },
  ];

  it("renders the header", () => {
    render(<Exams exams={[]} isLoading={false} />);
    expect(screen.getByText("What's due")).toBeInTheDocument();
  });

  it("renders skeletons when loading", () => {
    render(<Exams exams={[]} isLoading={true} />);
    expect(screen.getAllByTestId("exams-skeleton")).toHaveLength(5);
  });

  it("renders empty state when no exams", () => {
    render(<Exams exams={[]} isLoading={false} />);
    expect(screen.getByText("Nothing's due now'")).toBeInTheDocument();
    expect(
      screen.getByText("You'll see your next quizzes here.")
    ).toBeInTheDocument();
  });

  it("renders a list of ExamCards when exams exist", () => {
    render(<Exams exams={examsMock} isLoading={false} />);
    const cards = screen.getAllByTestId("ExamCard");
    expect(cards).toHaveLength(examsMock.length);
    examsMock.forEach((exam) => {
      expect(screen.getByText(exam.title)).toBeInTheDocument();
    });
  });

  it("has correct container attributes", () => {
    render(<Exams exams={[]} isLoading={false} />);
    const container = screen.getByTestId("ExamsList");
    expect(container).toHaveClass(
      "flex flex-col justify-start space-y-4 bg-white rounded-xl shadow-lg px-4 py-4 md:w-[40%] h-full w-full"
    );
  });
});
