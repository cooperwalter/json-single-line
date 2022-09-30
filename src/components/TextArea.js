import { TextareaAutosize } from "@mui/material";
import * as styles from "../styles";

const TextArea = ({ class: className, ...rest }) => {
  return (
    <TextareaAutosize
      class={`text-white bg-black/50 rounded-xl p-3 font-sans border-white/70 border-2 hover:border-white text-xl outline-none ${styles.scrollbarClasses} ${className}`}
      {...rest}
    />
  );
};

export default TextArea;
