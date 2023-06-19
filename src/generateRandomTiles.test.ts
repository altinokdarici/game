import { describe, it, expect } from '@jest/globals';
import { isRegularTile, tile } from './tile';
import { generateRandomTiles } from './generateRandomTiles';
import { RegularTile, Tile } from './types';

function convertTileToString(tile: Tile) {
  if (isRegularTile(tile)) {
    return `${tile.color}${tile.number}`;
  }
  return tile.type;
}

describe('getRandomTiles', () => {
  it('should return all possible tiles', () => {
    const result = generateRandomTiles();
    expect(result.length).toBe(106);

    const tiles = new Set<string>(result.map(convertTileToString));
    expect(tiles.size).toBe(53);
  });
});
