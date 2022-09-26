/** @jsxImportSource @emotion/react */
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Converter from "./components/Converter";
import Header from "./components/Header";
import colors from "./colors";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div
        css={{
          backgroundColor: colors.background,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          height: "100vh",
          margin: 0,
        }}
      >
        <Header />
        <Converter />
      </div>
    </React.Fragment>
  );
}

export default App;
