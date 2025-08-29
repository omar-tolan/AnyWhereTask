import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SideMenu from "./SideMenu";
import { useMenu } from "../../context/SideMenuContext";

vi.mock("../navigation/LinksContainer", () => ({
  __esModule: true,
  default: ({ links }: any) => <div data-testid="LinksContainer">{links.length} links</div>,
}));

vi.mock("../../context/SideMenuContext", () => ({
  useMenu: vi.fn(),
}));

describe("SideMenu", () => {
  const toggleMenuMock = vi.fn();

  it("renders overlay when menu is open", () => {
    (useMenu as any).mockReturnValue({ isMenuOpen: true, toggleMenu: toggleMenuMock });
    render(<SideMenu />);
    expect(screen.getByTestId("menu-overlay")).toBeInTheDocument();
  });

  it("does not render overlay when menu is closed", () => {
    (useMenu as any).mockReturnValue({ isMenuOpen: false, toggleMenu: toggleMenuMock });
    render(<SideMenu />);
    expect(screen.queryByTestId("menu-overlay")).not.toBeInTheDocument();
  });

  it("calls toggleMenu when overlay is clicked", () => {
    (useMenu as any).mockReturnValue({ isMenuOpen: true, toggleMenu: toggleMenuMock });
    render(<SideMenu />);
    fireEvent.click(screen.getByTestId("menu-overlay"));
    expect(toggleMenuMock).toHaveBeenCalled();
  });

  it("calls toggleMenu when close button is clicked", () => {
    (useMenu as any).mockReturnValue({ isMenuOpen: true, toggleMenu: toggleMenuMock });
    render(<SideMenu />);
    fireEvent.click(screen.getByTestId("menu-close-btn"));
    expect(toggleMenuMock).toHaveBeenCalled();
  });
});
