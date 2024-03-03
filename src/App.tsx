import { Box, CssBaseline, Container } from "@mui/material";

import QuestionsStepper from "./QuestionsStepper";
import "./App.css";

function App() {
  return (
    <Box
      sx={{
        background: `url("images/drop.png") no-repeat center center fixed`,
        backgroundSize: "cover",
      }}
      className="app-background"
    >
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
    </Box>
  );
}

export default App;
