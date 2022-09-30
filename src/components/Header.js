/** @jsxImportSource @emotion/react */
import FadeInOut from "./FadeInOut";
import Typography from "./Typography";

const Header = () => {
  return (
    <header class="w-full items-start p-4">
      <FadeInOut transition={{ type: "spring", duration: 2.5 }} visible>
        <Typography class="text-white text-4xl" variant="h4">
          JSON Single-Line Converter
        </Typography>
      </FadeInOut>
    </header>
  );
};
export default Header;
