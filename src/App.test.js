import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders pokemon lookbook", () => {
  const { getByText } = render(<App />);
  const appHeader = getByText(/Pokémon lookbook/i);
  expect(appHeader).toBeInTheDocument();
});
