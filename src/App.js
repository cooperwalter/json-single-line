/** @jsxImportSource @emotion/react */
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Converter from "./components/Converter";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div
        css={{
          backgroundColor: "rgba(0,0,0,0.87)",
          padding: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Converter />
      </div>
    </React.Fragment>
  );
}

export default App;
