import { TileString, tile } from './tile';

export function parseTiles(...arr: TileString[]) {
  return arr.map((t) => tile(t));
}
