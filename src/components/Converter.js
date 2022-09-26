/** @jsxImportSource @emotion/react */
import React from "react";
import Typography from "@mui/material/Typography";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import styled from "@emotion/styled";
import { IconButton, TextareaAutosize } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import colors from "../colors";

import multiToSingle from "../utils/multiToSingle";
import FadeInOut from "./FadeInOut";

const writeToClipboard = (text) => navigator.clipboard.writeText(text);

const StyledTypography = styled(Typography)({
  color: colors.text,
});

const StyledTextArea = styled(TextareaAutosize)({
  borderRadius: 16,
  padding: 12,
  borderWidth: 1.5,
  fontSize: "1.25rem",
  fontFamily: "roboto",
  width: "50vw",
  marginBottom: "1em",
  color: "white",
  backgroundColor: "rgba(0,0,0,0.5)",
  "&:hover": {
    color: colors.text,
    borderColor: "white",
  },
  "&:focus": {
    outline: "none",
    borderColor: "white",
  },
});

function App() {
  const [input, setInput] = React.useState("");

  let parsed;
  let errorMessage;
  try {
    parsed = multiToSingle(input);
  } catch (err) {
    errorMessage = err.message;
  }

  return (
    <FadeInOut transition={{ type: "spring", duration: 2.5 }} visible>
      <div
        css={{
          padding: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <StyledTextArea
            minRows={5}
            maxRows={15}
            placeholder="Input JSON"
            onChange={(evt) => setInput(evt.target.value)}
          />

          <div
            css={{
              display: "flex",
              flexDirection: "row",
              visibility: errorMessage && input.length ? undefined : "hidden",
              marginBottom: "0.25em",
            }}
          >
            <ErrorIcon css={{ color: "white", marginRight: "0.25em" }} />
            <StyledTypography>{errorMessage}</StyledTypography>
          </div>

          <FadeInOut
            visible={!errorMessage && parsed}
            css={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div>
              <StyledTypography css={{ fontWeight: "bold" }}>
                OUTPUT
              </StyledTypography>
              <StyledTextArea
                minRows={3}
                maxRows={10}
                placeholder="Single-Line JSON Output"
                value={input ? parsed : ""}
              />
            </div>
            <IconButton
              css={{
                color: "white",
                position: "absolute",
                right: "-2.25em",
                "&:active": {
                  color: "rgba(255,255,255, 0.50)",
                },
              }}
              onClick={() => writeToClipboard(parsed)}
            >
              <ContentCopyIcon fontSize="large" />
            </IconButton>
          </FadeInOut>
        </div>
      </div>
    </FadeInOut>
  );
}

export default App;
