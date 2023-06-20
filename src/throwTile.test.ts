import { describe, expect, it } from '@jest/globals';
import { throwTile } from './throwTile.js';
import { tile } from './tile.js';
import type { Tile } from './types.js';

describe('throwTile', () => {
  it('should throw the given tile into thrown tiles', () => {
    const playerTiles = [tile('G1'), tile('B13'), tile('B12'), tile('B11')];
    const tileToThrow = playerTiles[0];
    const thrownTiles: Tile[] = [tile('Y2')];

    const result = throwTile(playerTiles, tileToThrow, thrownTiles);

    expect(result.playerTiles).toEqual([tile('B13'), tile('B12'), tile('B11')]);
    expect(result.thrownTiles).toEqual([tile('Y2'), tile('G1')]);
  });

  it('should throw error if the tile to throw is not in the player tiles', () => {
    const playerTiles = [tile('G1'), tile('B13'), tile('B12'), tile('B11')];
    const tileToThrow = tile('Y2');
    const thrownTiles: Tile[] = [];

    expect(() => throwTile(playerTiles, tileToThrow, thrownTiles)).toThrow();
  });
});
