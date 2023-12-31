import { tile } from './tile.js';
import type { Color, Tile } from './types.js';

/**
 * Generate random tiles for a game.
 * @returns all the tiles that are needed for a game in a random order.
 */
export function generateRandomTiles(): Tile[] {
  const tempTiles = [
    ...generateTilesByColor('Black'),
    ...generateTilesByColor('Green'),
    ...generateTilesByColor('Red'),
    ...generateTilesByColor('Yellow'),
  ];

  const result: Tile[] = [];
  while (tempTiles.length > 0) {
    const r = Math.floor(Math.random() * (tempTiles.length - 1));
    result.push(tempTiles[r]);
    tempTiles.splice(r, 1);
  }

  return result;
}

function generateTilesByColor(color: Color) {
  const tiles: Tile[] = [];
  for (let i = 1; i < 14; i++) {
    tiles.push(tile(color, i));
    tiles.push(tile(color, i));
  }
  return tiles;
}
