import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator Component', () => {
  test('renders Calculator component and initial display', () => {
    render(<Calculator />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
