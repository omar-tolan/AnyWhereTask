import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import LinksContainer from "./LinksContainer";
import {Home, CalendarMonth} from "@mui/icons-material"

vi.mock("../../buttons/NavLink", () => ({
  __esModule: true,
  default: ({ link, selected }: any) => (
    <div
      data-testid={`navlink-${link.title}`}
      data-selected={selected} 
    >
      {link.title}
    </div>
  ),
}));



describe("LinksContainer", () => {
  const links = [
  {
    title: "Dashboard",
    icon: Home,
    link: "/dashboard",
  },
  {
    title: "Schedule",
    icon: CalendarMonth,
    link: "/schedule",
  },
];

  it("renders all links", () => {
    render(<LinksContainer links={links} />);
    links.forEach((link) => {
      expect(screen.getByTestId(`navlink-${link.title}`)).toBeInTheDocument();
    });
  });

});
