import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  it("renders the input element with placeholder", () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText("Search");
    expect(input).toBeInTheDocument();
  });

  it("has correct container classes", () => {
    render(<SearchInput />);
    const container = screen.getByRole("textbox").parentElement; 
    expect(container).toHaveClass(
      "flex flex-row justify-start items-center gap-2 border-1 border-gray-400 px-4 py-2 rounded-2xl bg-gray-100"
    );
  });
});
