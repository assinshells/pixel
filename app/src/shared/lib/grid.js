import { BLOCKS } from "@/shared/config/constants";
export const getBlockIndex = (x, y) => y * BLOCKS + x;
