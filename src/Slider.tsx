import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
    return `${value}°C`;
}

export default function DiscreteSlider() {
    return (
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Temperature"
                defaultValue={30}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                shiftStep={30}
                step={1}
                marks
                min={1}
                max={5}
            />
        </Box>
    );
}