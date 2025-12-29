import React, { useRef, useEffect } from "react";
import { useApp } from "@/app/providers/AppProvider";
import { GRID_SIZE, BLOCKS, BLOCK_SIZE } from "@/shared/config/constants";
import { getBlockIndex } from "@/shared/lib/grid";

export const CanvasGrid = () => {
  const canvasRef = useRef(null);
  const { gridModel, adsModel } = useApp();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, GRID_SIZE, GRID_SIZE);

    // Draw blocks
    for (let y = 0; y < BLOCKS; y++) {
      for (let x = 0; x < BLOCKS; x++) {
        const index = getBlockIndex(x, y);
        const state = gridModel.blocks[index];

        ctx.fillStyle = state === 2 ? "#fff" : state === 1 ? "#81c784" : "#eee";
        ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        ctx.strokeStyle = "#ccc";
        ctx.lineWidth = 0.5;
        ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
      }
    }

    // Draw ads
    adsModel.purchasedAds.forEach((ad) => {
      if (ad.image?.complete) {
        const minX = Math.min(...ad.blocks.map((b) => b.x));
        const minY = Math.min(...ad.blocks.map((b) => b.y));
        const maxX = Math.max(...ad.blocks.map((b) => b.x));
        const maxY = Math.max(...ad.blocks.map((b) => b.y));
        const width = (maxX - minX + 1) * BLOCK_SIZE;
        const height = (maxY - minY + 1) * BLOCK_SIZE;
        ctx.drawImage(
          ad.image,
          minX * BLOCK_SIZE,
          minY * BLOCK_SIZE,
          width,
          height
        );
      }
    });
  }, [gridModel.blocks, adsModel.purchasedAds]);

  const handleClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / BLOCK_SIZE);
    const y = Math.floor((e.clientY - rect.top) / BLOCK_SIZE);

    const ad = adsModel.getAdAtPosition(x, y);
    if (ad) {
      window.open(ad.websiteUrl, "_blank");
      return;
    }

    gridModel.toggleBlock(x, y);
  };

  return (
    <canvas
      ref={canvasRef}
      width={GRID_SIZE}
      height={GRID_SIZE}
      className="d-block mx-auto"
      style={{
        imageRendering: "pixelated",
        cursor: "crosshair",
      }}
      onClick={handleClick}
    />
  );
};
