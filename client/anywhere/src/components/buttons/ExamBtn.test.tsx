import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import ExamBtn from "./ExamBtn";

describe("ExamBtn", () => {
  it("renders the button text correctly", () => {
    render(<ExamBtn />);
    expect(screen.getByRole("button", { name: /start exam/i })).toBeInTheDocument();
  });

  it("applies custom className to wrapper div", () => {
    render(<ExamBtn className="custom-class" />);
    const wrapper = screen.getByRole("button", { name: /start exam/i }).parentElement;
    expect(wrapper).toHaveClass("custom-class");
  });

  it("responds to click events", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <div onClick={handleClick}>
        <ExamBtn />
      </div>
    );

    const button = screen.getByRole("button", { name: /start exam/i });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
