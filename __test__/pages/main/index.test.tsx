import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/app/page';

describe('Main Page', () => {
  it('should render properly', () => {
    render(<Home />);

    const header = screen.getByRole('heading');
    const headerText = 'Hello World!';

    expect(header).toHaveTextContent(headerText);
  });

  it('should have disabled button', () => {
    render(<Home />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeDisabled();
  });
});
