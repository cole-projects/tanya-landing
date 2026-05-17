import { forwardRef } from "react";
import { motion } from "framer-motion";

const GlassPanel = forwardRef(function GlassPanel(
  { as: Tag = "div", className = "", children, ...rest },
  ref
) {
  return (
    <Tag
      ref={ref}
      className={["glass-panel", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export const MotionGlassPanel = motion(GlassPanel);

export default GlassPanel;
