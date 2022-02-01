import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("renders without crashing", async () => {
  render(<App />);
  
  const title = await screen.findByText(/Última búsqueda/i);
  
  expect(title).toBeInTheDocument();
});

test("search form could be used", async () => {
  render(<App />);

  // Obtiene el elemento por su role predeterminado
  const input = await screen.findByRole("searchbox");

  // Activa eventos
  fireEvent.change(input, { target: { value: "Matrix" } });
  fireEvent.submit(input);

  const title = await screen.findByText("Matrix");
  expect(title).toBeVisible();
});
