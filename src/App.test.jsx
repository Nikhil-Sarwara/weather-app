import { render, screen } from "@testing-library/react";
import App from "./App";

it("should have hello world", () => {
  render(<App />);
  const message = screen.getByText("Hello, Beautiful World!");
  expect(message).toBeInTheDocument();
});
