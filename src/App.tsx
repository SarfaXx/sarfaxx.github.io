import { Box, CssBaseline, Container, Paper } from "@mui/material";
import React from "react";
import QuestionsStepper from "./QuestionsStepper";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          minHeight={"100vh"}
        >
          <QuestionsStepper></QuestionsStepper>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
