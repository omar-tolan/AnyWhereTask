import { render, screen } from "@testing-library/react";
import NavLink from "./NavLink";
import HomeIcon from "@mui/icons-material/Home";

const mockLink = {
  title: "Home",
  logo: "home",
  link: "/home",
  icon: HomeIcon,
};

describe("NavLink", () => {
  it("renders the link title", () => {
    render(<NavLink link={mockLink} selected={false} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("applies selected styles when selected", () => {
    render(<NavLink link={mockLink} selected={true} />);
    const text = screen.getByText("Home");
    expect(text).toHaveStyle({ color: "#0B3C5D" });
  });

});
