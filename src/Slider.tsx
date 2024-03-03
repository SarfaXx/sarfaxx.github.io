import { Grid, Typography } from "@mui/material";

import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}°C`;
}

export default function DiscreteSlider(props: any) {
  const { activeQuestion, answers, setAnswers } = props;

  return (
    <Grid container spacing={4} justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={3}>
        <Typography variant="subtitle2">Nie zgadzam się</Typography>
      </Grid>
      <Grid item xs={6}>
        <Slider
          onChange={(_event, value) => {
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
          step={0.5}
          marks
          min={-1}
          max={1}
        />
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle2">Zgadzam się</Typography>
      </Grid>
    </Grid>
  );
}
