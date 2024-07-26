// src/components/Slider.tsx

import React, { useState } from 'react';
import './Slider.scss';

type SliderType = 'continuous' | 'discreet';
type SliderSubtype = 'single' | 'range';

interface SliderProps {
  type: SliderType;
  subtype: SliderSubtype;
  steps?: number; // Only applicable for 'discreet'
  handleSize: 'Size_24' | 'Size_32';
  onChange: (value: number | [number, number]) => void; // For single or range
}

const Slider: React.FC<SliderProps> = ({
  type,
  subtype,
  steps = 10,
  handleSize,
  onChange,
}) => {
  const [value, setValue] = useState<number | [number, number]>(0);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    // Handle dragging logic here
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = type === 'discreet' ? Math.round(+event.target.value) : +event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={`slider slider-${handleSize} slider-${type} slider-${subtype}`} onMouseDown={handleMouseDown}>
      <input
        type="range"
        min={0}
        max={type === 'discreet' ? steps : 100}
        value={value}
        onChange={handleChange}
        className={`slider-input slider-input-${type}`}
      />
    </div>
  );
};

export default Slider;
