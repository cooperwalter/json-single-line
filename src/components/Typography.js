import { Typography as TypographyMUI } from "@mui/material";

const Typography = ({ class: className, ...rest }) => {
  return (
    <TypographyMUI class={`text-white font-sans ${className}`} {...rest} />
  );
};

export default Typography;
