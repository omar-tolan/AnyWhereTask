import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import authReducer from "../../features/authSlice";
import LogoutBtn from "./LogoutBtn";

const renderWithStore = (ui: React.ReactNode, store: any) =>
  render(<Provider store={store}>{ui}</Provider>);

describe("LogoutBtn", () => {
  it("renders logout button", () => {
    const store = configureStore({ reducer: { auth: authReducer } });
    renderWithStore(<LogoutBtn />, store);

    expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();
  });

  it("dispatches logout action on click", async () => {
    const store = configureStore({ reducer: { auth: authReducer } });
    const user = userEvent.setup();

    renderWithStore(<LogoutBtn />, store);

    const button = screen.getByRole("button", { name: /logout/i });
    await user.click(button);

    const actions = store.getState().auth;
    expect(actions.isAuthenticated).toBe(false);
  });
});
