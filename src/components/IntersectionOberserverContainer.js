import React from "react";
import { useElementOnScreen } from "../hooks/useElementOnScreen";

export default function IntersectionOberserver({
  children,
  animation = "default",
}) {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });
  return (
    <div
      ref={containerRef}
      id="IOContainer"
      className={
        animation === "fade"
          ? isVisible
            ? "IO_visible_fade"
            : "IO_hidden_fade"
          : isVisible
          ? "IO_visible"
          : "IO_hidden"
      }
      style={{ transition: animation === "fade" ? "all 1500ms" : "all 500ms" }}
    >
      {children}

      <style>{`
      #IOContainer {
        transition: all 500ms;
      }

      .IO_hidden {
        opacity: 0;
        transform: translateX(-30px);
      }
      
      .IO_visible {
        opacity: 1;
        transform: translateX(0);
      }

      .IO_hidden_fade {
        opacity: 0;
      }
      
      .IO_visible_fade {
        opacity: 1;
      }

      
      `}</style>
    </div>
  );
}
