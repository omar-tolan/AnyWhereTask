import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Navmenu from "./Navmenu";
import authReducer from "../../../features/authSlice";

const renderWithProvider = (ui: React.ReactElement) => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
    },
  });
  return render(<Provider store={store}>{ui}</Provider>);
};

describe("Navmenu", () => {
  it("renders the search input", () => {
    renderWithProvider(<Navmenu />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders notifications and mail icons with badges", () => {
    renderWithProvider(<Navmenu />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("renders account circle icon", () => {
    renderWithProvider(<Navmenu />);
    expect(screen.getByTestId("AccountCircleIcon")).toBeInTheDocument();
  });

  it("renders the logout button", () => {
    renderWithProvider(<Navmenu />);
    expect(
      screen.getByRole("button", { name: /logout/i })
    ).toBeInTheDocument();
  });
});
