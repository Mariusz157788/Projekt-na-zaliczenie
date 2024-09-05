import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders Delicious Food header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Delicious Food/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders search bar", () => {
  render(<App />);
  const searchBarElement = screen.getByLabelText(/Szukaj/i);
  expect(searchBarElement).toBeInTheDocument();
});

test("fetches and displays recipes on search", async () => {
  render(<App />);
  const searchBarElement = screen.getByLabelText(/Szukaj/i);
  fireEvent.change(searchBarElement, { target: { value: "chicken" } });
  fireEvent.click(screen.getByRole("button", { name: /search/i }));

  const recipeCards = await screen.findAllByText(/calories/i);
  expect(recipeCards.length).toBeGreaterThan(0);
});
