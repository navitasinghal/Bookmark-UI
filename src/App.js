import React from "react";
import "./App.css";
import Home from "./components/Home";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#707070",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
