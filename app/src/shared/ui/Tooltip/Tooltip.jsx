import React from "react";

export const Tooltip = ({ content, position }) => {
  if (!content || !position) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        color: "white",
        padding: "8px 12px",
        borderRadius: "6px",
        fontSize: "12px",
        zIndex: 1000,
        pointerEvents: "none",
        maxWidth: "250px",
        lineHeight: "1.4",
        whiteSpace: "pre-wrap",
      }}
    >
      {content}
    </div>
  );
};
