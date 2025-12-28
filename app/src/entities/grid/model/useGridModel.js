import { useState } from "react";
import { BLOCKS } from "@/shared/config/constants";
import { getBlockIndex } from "@/shared/lib/grid";

const useGridModel = () => {
  const [blocks, setBlocks] = useState(new Uint8Array(BLOCKS * BLOCKS));
  const [selectedBlocks, setSelectedBlocks] = useState(new Set());
  const [selectedCount, setSelectedCount] = useState(0);

  const toggleBlock = (x, y) => {
    const index = getBlockIndex(x, y);
    if (blocks[index] === 2) return;

    const newBlocks = new Uint8Array(blocks);
    const newSelectedBlocks = new Set(selectedBlocks);

    if (blocks[index] === 0) {
      newBlocks[index] = 1;
      newSelectedBlocks.add(`${x},${y}`);
      setSelectedCount(selectedCount + 1);
    } else if (blocks[index] === 1) {
      newBlocks[index] = 0;
      newSelectedBlocks.delete(`${x},${y}`);
      setSelectedCount(selectedCount - 1);
    }

    setBlocks(newBlocks);
    setSelectedBlocks(newSelectedBlocks);
  };

  const resetSelection = () => {
    const newBlocks = new Uint8Array(blocks);
    selectedBlocks.forEach((key) => {
      const [x, y] = key.split(",").map(Number);
      newBlocks[getBlockIndex(x, y)] = 0;
    });
    setBlocks(newBlocks);
    setSelectedBlocks(new Set());
    setSelectedCount(0);
  };

  const markAsPurchased = (blocksList) => {
    const newBlocks = new Uint8Array(blocks);
    blocksList.forEach((block) => {
      newBlocks[getBlockIndex(block.x, block.y)] = 2;
    });
    setBlocks(newBlocks);
  };

  return {
    blocks,
    selectedBlocks,
    selectedCount,
    toggleBlock,
    resetSelection,
    markAsPurchased,
  };
};
