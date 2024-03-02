
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
    return `${value}°C`;
}

export default function DiscreteSlider() {
    return (
        <Box sx={{ width: 300 }}>
            <span>Nie zgadzam się</span>
            <Slider
                aria-label="Temperature"

                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                shiftStep={30}
                step={0.5}
                marks
                min={-1}
                max={1}
            />
            <span>Zgadzam się</span>

        </Box>
    );
}