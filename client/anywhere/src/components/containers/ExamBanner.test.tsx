import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import ExamBanner from "./ExamBanner";

vi.mock("../../buttons/BannerBtn", () => ({
  default: (props: any) => <button {...props}>View exam tips</button>,
}));

describe("ExamBanner", () => {
  beforeEach(() => {
    render(<ExamBanner />);
  });

  it("renders main heading", () => {
    const heading = screen.getByRole("heading", { name: /Exams Time/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders description paragraph", () => {
    const description = screen.getByText(
      /Here we are, Are you ready to fight/i
    );
    expect(description).toBeInTheDocument();
  });

  it("renders quote paragraph", () => {
    const quote = screen.getByText(/Nothing happens until something moves/i);
    expect(quote).toBeInTheDocument();
  });

  it("renders the BannerBtn", () => {
    const btn = screen.getByRole("button", { name: /View exam tips/i });
    expect(btn).toBeInTheDocument();
  });

  it("renders the exam illustration image", () => {
    const img = screen.getByAltText(/exam illustration 1/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/images/banner.svg");
  });

  it("has correct container attributes", () => {
    const container = screen.getByTestId("ExamBanner");
    expect(container).toHaveClass(
      "flex flex-row justify-between bg-white rounded-xl shadow-lg px-4 py-4"
    );
  });
});
