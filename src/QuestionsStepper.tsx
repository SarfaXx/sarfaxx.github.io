import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { generatedQuestions } from "./generatedQuestions";
import Slider from "./Slider";

const initialAnswers = {
  "0": 0,
  "1": 0,
  "2": 0,
  "3": 0,
  "4": 0,
  "5": 0,
  "6": 0,
  "7": 0,
  "8": 0,
  "9": 0,
  "10": 0,
  "11": 0,
  "12": 0,
  "13": 0,
};

export default function QuestionsStepper() {
  const theme = useTheme();
  const [activeQuestion, setActiveStep] = React.useState(0);
  const [answers, setAnswers] = React.useState(initialAnswers);

  const maxSteps = generatedQuestions.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>
          Pytanie {activeQuestion + 1} z {generatedQuestions.length}
        </Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
        {generatedQuestions[activeQuestion].question}
      </Box>
      <Slider
        answers={answers}
        activeQuestion={activeQuestion}
        setAnswers={setAnswers}
      ></Slider>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeQuestion}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeQuestion === maxSteps - 1}
          >
            Następne pytanie
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeQuestion === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Powrót
          </Button>
        }
      />
    </Box>
  );
}
