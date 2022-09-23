/** @jsxImportSource @emotion/react */
import { Typography } from "@mui/material";
const Header = () => {
  return (
    <header css={{ padding: 20, alignItems: "flex-start", width: "100%" }}>
      <Typography variant="h4" css={{ color: "white" }}>
        JSON Single-Line Converter
      </Typography>
    </header>
  );
};
export default Header;
