import { motion, useAnimationControls } from "framer-motion";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton } from "@mui/material";
import Typography from "./Typography";

const writeToClipboard = (text) => navigator.clipboard.writeText(text);

const CopyButton = ({ text }) => {
  const controls = useAnimationControls();
  const dy = 10;
  const ddy = dy * 2;
  const handleClick = () => {
    writeToClipboard(text);
    controls.start({
      opacity: [null, 1, 1, 1, dy, 0],
      y: [null, dy, dy, dy, dy, ddy],
    });
  };
  return (
    <div class="absolute -right-14">
      <motion.div whileHover={{ scale: 1.08 }}>
        <IconButton
          class=" text-white active:text-white/50 p-2"
          onClick={handleClick}
        >
          <ContentCopyIcon fontSize="large" />
        </IconButton>
      </motion.div>
      <motion.div
        class="absolute -bottom-2 rounded-lg w-full"
        initial={{ opacity: 0, y: ddy }}
        animate={controls}
      >
        <Typography class="text-sm text-center">Copied</Typography>
      </motion.div>
    </div>
  );
};

export default CopyButton;
