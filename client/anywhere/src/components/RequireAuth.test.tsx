import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import type { RootState } from "../app/store";

const mockStore: any = (state: Partial<RootState>) => ({
  getState: () => state,
  subscribe: () => 0,
  dispatch: vi.fn(),
});

describe("RequireAuth", () => {
  it("renders children when authenticated", () => {
    const store = mockStore({ auth: { isAuthenticated: true } } as RootState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <RequireAuth>
            <div data-testid="protected">Protected Content</div>
          </RequireAuth>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId("protected")).toBeInTheDocument();
  });

  it("redirects to /login when not authenticated", () => {
    const store = mockStore({ auth: { isAuthenticated: false } } as RootState);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/protected"]}>
          <Routes>
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <div data-testid="protected">Protected Content</div>
                </RequireAuth>
              }
            />
            <Route path="/login" element={<div data-testid="login">Login Page</div>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId("login")).toBeInTheDocument();
  });
});
