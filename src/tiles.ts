import { tile, type TileString } from "./tile.js";

export function parseTiles(...arr: TileString[]) {
  return arr.map((t) => tile(t));
}
