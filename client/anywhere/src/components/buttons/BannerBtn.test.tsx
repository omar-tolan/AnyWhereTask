import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BannerBtn from "./BannerBtn";

describe("BannerBtn", () => {
  it("renders the button text correctly", () => {
    render(<BannerBtn />);
    expect(
      screen.getByRole("button", { name: /view exam tips/i })
    ).toBeInTheDocument();
  });

  it("applies custom className to wrapper div", () => {
    render(<BannerBtn className="custom-class" />);
    const wrapper = screen.getByRole("button", {
      name: /view exam tips/i,
    }).parentElement;
    expect(wrapper).toHaveClass("custom-class");
  });

  it("responds to click events", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <div onClick={handleClick}>
        <BannerBtn />
      </div>
    );

    const button = screen.getByRole("button", { name: /view exam tips/i });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
