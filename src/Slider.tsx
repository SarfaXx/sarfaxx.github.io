import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}°C`;
}

export default function DiscreteSlider(props: any) {
  const { activeQuestion, answers, setAnswers } = props;

  return (
    <Box sx={{ width: 300 }}>
      <span>Nie zgadzam się</span>
      <Slider
        onChange={(event, value) => {
          setAnswers((actualAnswers: any) => {
            return {
              ...actualAnswers,
              [activeQuestion]: value,
            };
          });
        }}
        aria-label="Temperature"
        value={answers[activeQuestion]}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={0.5}
        marks
        min={-1}
        max={1}
      />
      <span>Zgadzam się</span>
    </Box>
  );
}
