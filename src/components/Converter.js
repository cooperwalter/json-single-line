/** @jsxImportSource @emotion/react */
import React from "react";
import Typography from "@mui/material/Typography";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import styled from "@emotion/styled";
import { IconButton, TextareaAutosize } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import multiToSingle from "../utils/multiToSingle";

const writeToClipboard = (text) => navigator.clipboard.writeText(text);

const StyledTypography = styled(Typography)({
  color: "white",
});

const StyledTextArea = styled(TextareaAutosize)({
  borderRadius: 16,
  padding: 12,
  borderWidth: 1,
  fontSize: "1.25rem",
  fontFamily: "roboto",
  width: "50vw",
  marginBottom: "1vh",
  color: "white",
  backgroundColor: "rgba(0,0,0,0.95)",
  "&:hover": {
    color: "white",
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
    <React.Fragment>
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
            css={{
              marginBottom: 20,
            }}
            minRows={5}
            maxRows={15}
            placeholder="Input JSON"
            onChange={(evt) => setInput(evt.target.value)}
          />
          {errorMessage && input.length ? (
            <StyledTypography>{errorMessage}</StyledTypography>
          ) : null}

          <AnimatePresence>
            {!errorMessage && parsed ? (
              <motion.div
                css={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
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
                    right: "21vw",
                    "&:active": {
                      color: "rgba(255,255,255, 0.50)",
                    },
                  }}
                  onClick={() => writeToClipboard(parsed)}
                >
                  <ContentCopyIcon fontSize="large" />
                </IconButton>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
