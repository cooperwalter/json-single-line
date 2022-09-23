/** @jsxImportSource @emotion/react */
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Converter from "./components/Converter";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div
        css={{
          backgroundColor: "rgba(0,0,0,0.87)",
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
