/** @jsxImportSource @emotion/react */
import { Typography } from "@mui/material";
import FadeInOut from "./FadeInOut";

const Header = () => {
  return (
    <header css={{ padding: 20, alignItems: "flex-start", width: "100%" }}>
      <FadeInOut transition={{ type: "spring", duration: 2.5 }} visible>
        <Typography variant="h4" css={{ color: "white" }}>
          JSON Single-Line Converter
        </Typography>
      </FadeInOut>
    </header>
  );
};
export default Header;
