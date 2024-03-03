import { Box, CssBaseline, Container, Paper } from "@mui/material";
import React from "react";
import QuestionsStepper from "./QuestionsStepper";
import "./App.css";

function App() {
  return (
    <div className="app-background">
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
    </div>
  );
}

export default App;
