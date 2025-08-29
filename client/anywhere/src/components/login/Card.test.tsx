import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

vi.mock("../buttons/LoginBtn", () => ({
  __esModule: true,
  default: (props: any) => <button {...props}>Login</button>,
}));

describe("Card", () => {
  it("renders the welcome heading", () => {
    render(<Card />);
    const heading = screen.getByText("Welcome Back!");
    expect(heading).toBeInTheDocument();
  });

  it("renders the login description", () => {
    render(<Card />);
    const description = screen.getByText("Login to start using Coligo");
    expect(description).toBeInTheDocument();
  });

  it("renders the LoginBtn", () => {
    render(<Card />);
    const btn = screen.getByRole("button", { name: /Login/i });
    expect(btn).toBeInTheDocument();
  });

});
