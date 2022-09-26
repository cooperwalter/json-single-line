import { motion, AnimatePresence } from "framer-motion";

const FadeInOut = ({
  children,
  visible,
  initial,
  animate,
  exit,
  speed = "fast",
  ...props
}) => {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, ...initial }}
          animate={{ opacity: 1, ...animate }}
          exit={{ opacity: 0, ...exit }}
          transition={
            speed === "slow" ? { type: "spring", duration: 2 } : undefined
          }
          {...props}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default FadeInOut;
