import { render, screen } from "@testing-library/react";
import Sort from "./Sort";

describe('Sort', () => {
  it('should render sort button', () => {
    render(<Sort />);

    const button = screen.getByRole('button', {
      name: 'Sort by Price (Descending)'
    });

    expect(button).toBeInTheDocument();
  })
})