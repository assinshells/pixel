import React from "react";
import { BLOCK_PRICE } from "@/shared/config/constants";

export const AdPopover = ({ ad, position, onClose }) => {
  if (!ad || !position) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
        }}
        onClick={onClose}
      />

      {/* Popover */}
      <div
        style={{
          position: "fixed",
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: "white",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          zIndex: 1000,
          minWidth: "300px",
          maxWidth: "400px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ marginBottom: "12px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              marginBottom: "8px",
            }}
          >
            <h6
              style={{
                margin: 0,
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              {ad.companyName}
            </h6>
            <button
              onClick={onClose}
              style={{
                border: "none",
                background: "none",
                fontSize: "20px",
                cursor: "pointer",
                padding: "0",
                lineHeight: "1",
                color: "#666",
              }}
            >
              ×
            </button>
          </div>
          <p
            style={{
              margin: "0 0 8px 0",
              fontSize: "13px",
              color: "#666",
              lineHeight: "1.4",
            }}
          >
            {ad.altText}
          </p>
          <a
            href={ad.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "13px",
              color: "#198754",
              textDecoration: "none",
              wordBreak: "break-all",
            }}
          >
            {ad.websiteUrl} ↗
          </a>
        </div>

        <div
          style={{
            marginTop: "12px",
            paddingTop: "12px",
            borderTop: "1px solid #eee",
          }}
        >
          <div style={{ fontSize: "11px", color: "#666", marginBottom: "4px" }}>
            Ad Size
          </div>
          <div style={{ fontSize: "13px", color: "#333" }}>
            {ad.blocks.length} block{ad.blocks.length !== 1 ? "s" : ""}
            <span style={{ color: "#666" }}>
              {" "}
              (${(ad.blocks.length * BLOCK_PRICE).toLocaleString()})
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
