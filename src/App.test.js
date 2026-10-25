import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders React website", () => {
  render(<App />);

  expect(screen.getByText("My React Website")).toBeInTheDocument();
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("About Us")).toBeInTheDocument();
  expect(screen.getByText("Contact Us")).toBeInTheDocument();
});
