import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders Header title ", () => {
    render(<App />);
    expect(screen.getByText("Sweet Meal")).toBeInTheDocument();
    expect(screen.getByText("Sweet Meal")).toBeVisible();
  });

  it("renders h2 element", () => {
    render(<App />);
    expect(screen.getByText("Get your meal on time")).toBeInTheDocument();
  });

  it("renders list of products", () => {
    render(<App />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
    expect(listElement).toBeVisible();
  });
});
