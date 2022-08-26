import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Real Estate header", () => {
  render(<App />);
  const header = screen.getByText(/Real Estate/i);
  expect(header).toBeInTheDocument();
});
