import { render, screen } from "@testing-library/react";
import Products from "./Products";

describe('Products', () => {
  it('should render correctly', () => {
    render(<Products />);

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  })
})