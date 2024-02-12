import { render, screen } from "@testing-library/react";
import App from "./App";

// Initial State
it("initializes with an empty input field", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText("Enter something");
  expect(inputElement.value).toBe("");
});

it("initializes with a temperature of 0°C", () => {
  render(<App />);
  const temperatureElement = screen.getByText("0 °C");
  expect(temperatureElement).toBeInTheDocument();
});

it("should have hello world", () => {
  render(<App />);
  const message = screen.getByText("Hello, Beautiful World!");
  expect(message).toBeInTheDocument();
});
