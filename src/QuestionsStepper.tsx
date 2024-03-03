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
import { calculateResults } from "./calculateResults";
import { Card, CardContent, CardMedia } from "@mui/material";

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
  const [showResults, setShowResults] = React.useState(false);

  const maxSteps = generatedQuestions.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleResults = () => {
    setShowResults(true);
  };
  if (showResults === true) {
    return (
      <Card sx={{ width: 600 }}>
        <CardMedia sx={{ height: 200 }} image="tak.png"></CardMedia>
        <CardContent>
          <Box sx={{ flexGrow: 1 }}>
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
              <Typography variant="h4"> Koniec testu</Typography>
            </Paper>
            <Box sx={{ height: 255, width: "100%", p: 2 }}>
              <Typography variant="subtitle1">
                Twój wynik wynosi:
                <strong>
                  {calculateResults(generatedQuestions, answers)}%{" "}
                </strong>
              </Typography>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button variant="contained" onClick={() => location.reload()}>
                Rozwiąż test ponownie
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card sx={{ width: 600 }}>
      <CardMedia sx={{ height: 200 }} image="images/tak.png"></CardMedia>
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
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
            <Typography variant="h4" component="h4">
              Pytanie {activeQuestion + 1} z {generatedQuestions.length}
            </Typography>
          </Paper>
          <Box sx={{ height: 200, width: "100%", p: 2 }}>
            <Typography variant="subtitle1">
              {" "}
              {generatedQuestions[activeQuestion].question}{" "}
            </Typography>
          </Box>
          <Box marginBottom={6}>
            <Slider
              answers={answers}
              activeQuestion={activeQuestion}
              setAnswers={setAnswers}
            ></Slider>
          </Box>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeQuestion}
            nextButton={
              <Button
                size="small"
                onClick={activeQuestion === 13 ? handleResults : handleNext}
              >
                {activeQuestion === 13 ? "Wyświetl wynik" : " Następne pytanie"}

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
      </CardContent>
    </Card>
  );
}
