import { BLOCK_PRICE } from "@/shared/config/constants";

const formatPrice = (count) => (count * BLOCK_PRICE).toLocaleString();

const formatBlockCoordinates = (selectedBlocks) => {
  return Array.from(selectedBlocks)
    .map((key) => {
      const [x, y] = key.split(",").map(Number);
      return `${y + 1}.${x + 1}`;
    })
    .join(", ");
};
