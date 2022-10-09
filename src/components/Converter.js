/** @jsxImportSource @emotion/react */
import React from "react";
import Typography from "./Typography";
import TextArea from "./TextArea";
import ErrorIcon from "@mui/icons-material/Error";

import multiToSingle from "../utils/multiToSingle";
import FadeInOut from "./FadeInOut";
import CopyButton from "./CopyButton";

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
      <div class="p-8 flex flex-col items-center">
        <div class="flex flex-col w-3/5">
          <div class="w-full mb-2">
            <TextArea
              class="mb-1 w-full"
              minRows={5}
              maxRows={15}
              placeholder="Input JSON"
              onChange={(evt) => setInput(evt.target.value)}
            />

            <div
              class={`flex flex-row mb-1 self-start ${
                errorMessage && input.length ? "" : "hidden"
              }`}
            >
              <ErrorIcon css={{ color: "white", marginRight: "0.25em" }} />
              <Typography>{errorMessage}</Typography>
            </div>
          </div>

          <FadeInOut
            class="flex flex-row items-center relative"
            visible={!errorMessage && parsed}
            css={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div class="flex flex-col justify-center w-full">
              <Typography class="font-bold mb-1 text-lg">OUTPUT</Typography>
              <div class="flex flex-row items-center">
                <TextArea
                  class="w-full"
                  minRows={5}
                  maxRows={15}
                  placeholder="Single-Line JSON Output"
                  value={input ? parsed : ""}
                />
                <CopyButton text={parsed} />
              </div>
            </div>
          </FadeInOut>
        </div>
      </div>
    </FadeInOut>
  );
}

export default App;
