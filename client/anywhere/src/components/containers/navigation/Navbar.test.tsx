import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../../features/authSlice";
import { MenuProvider } from "../../../context/SideMenuContext";
import NavBar from "./Navbar";

function renderNavbar() {
  const store = configureStore({
    reducer: { auth: authReducer },
  });

  return render(
    <Provider store={store}>
      <MenuProvider>
        <NavBar />
      </MenuProvider>
    </Provider>
  );
}

describe("Navbar", () => {
  it("renders welcome text", () => {
    renderNavbar();
    expect(screen.getByText(/Welcome Talia,/i)).toBeInTheDocument();
  });

  it("shows menu button when menu is closed", () => {
    renderNavbar();
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });

it("hides menu button after clicking it (menu open)", () => {
  renderNavbar();

  const menuButton = screen.getByRole("button", { name: /menu/i });
  fireEvent.click(menuButton);
  expect(menuButton).toHaveClass("hidden");
});


  it("renders Navmenu", () => {
    renderNavbar();
    expect(screen.getByTestId("Navmenu")).toBeInTheDocument();
  });
});
