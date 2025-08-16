import { motion, MotionProps } from "motion/react";

export default function AnimatedStick(props: MotionProps) {
  return (
    <motion.span
      className="block h-0.5 w-full bg-gray-500 rounded-full"
      transition={
        props.transition
          ? props.transition
          : { duration: 0.3, ease: "easeInOut" }
      }
      {...props}
    />
  );
}
