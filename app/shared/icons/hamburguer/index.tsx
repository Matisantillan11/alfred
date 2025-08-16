import { cn } from "@alfred/app/shared";
import { HamburgerProps } from "./types";
import AnimatedStick from "./animated-stick";

const topLine = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 7 },
};

const middleLine = {
  closed: { x: 0 },
  open: { x: -100 },
};

const bottomLine = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -7 },
};

export default function Hamburger({
  isOpen,
  onClick,
  className = "",
}: HamburgerProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col justify-between h-4 w-6 mt-4 bg-transparent border-none cursor-pointer p-0 z-50 focus:outline-none",
        className
      )}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <AnimatedStick
        variants={topLine}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      />
      <AnimatedStick
        variants={middleLine}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      />
      <AnimatedStick
        variants={bottomLine}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      />
    </button>
  );
}
