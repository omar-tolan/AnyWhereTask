import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import authReducer from "../../features/authSlice";
import LoginBtn from "./LoginBtn";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router-dom")>();
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const renderWithProviders = (ui: React.ReactNode) => {
  const store = configureStore({
    reducer: { auth: authReducer },
  });
  return render(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>
  );
};

describe("LoginBtn (integration with real store)", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renders the button", () => {
    renderWithProviders(<LoginBtn />);
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("dispatches login and navigates on click", async () => {
    const user = userEvent.setup();
    const store = configureStore({ reducer: { auth: authReducer } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginBtn />
        </MemoryRouter>
      </Provider>
    );

    const button = screen.getByRole("button", { name: /login/i });
    await user.click(button);

    const actions = store.getState().auth;
    expect(actions.isAuthenticated).toBe(true);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
