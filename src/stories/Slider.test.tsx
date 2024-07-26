import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Slider } from './Slider';

describe('Slider', () => {
  it('renders without crashing', () => {
    render(
      <Slider
        type="Continuous"
        subtype="Single"
        handleSize="Size_24"
        onChange={() => {}}
      />
    );
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('calls onChange when dragged', () => {
    const mockOnChange = jest.fn();
    render(
      <Slider
        type="Continuous"
        subtype="Single"
        handleSize="Size_24"
        onChange={mockOnChange}
      />
    );
    
    const slider = screen.getByRole('slider');
    fireEvent.mouseDown(slider);
    fireEvent.mouseMove(slider, { clientX: 100 });
    fireEvent.mouseUp(slider);

    expect(mockOnChange).toHaveBeenCalled();
  });

  // Add more tests for different prop combinations and interactions
});