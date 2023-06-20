import { describe, it, expect } from '@jest/globals';
import type { Tile } from './types.js';
import { chooseOkey } from './chooseOkey.js';
import { tile } from './tile.js';

describe('chooseOkey', () => {
  it('should choose okey ', () => {
    const tiles = [tile('G1'), tile('B13'), tile('B12'), tile('B12'), tile('B11'), tile('B11')];
    const { allTiles, indicatorTile } = chooseOkey(tiles);
    const indicatorTilesInAllTiles = allTiles.filter(
      (tile) => tile.number === indicatorTile.number && tile.color === indicatorTile.color,
    );
    const fakeTilesCount = allTiles.filter((tile) => tile.type === 'Fake').length;
    const okeyTilesCount = allTiles.filter((tile) => tile.type === 'Okey').length;

    expect(indicatorTile).toEqual(tile('B11'));
    expect(indicatorTilesInAllTiles.length).toBe(1);
    expect(fakeTilesCount).toBe(2);
    expect(okeyTilesCount).toBe(2);
  });

  it('should choose okey if indicator is 13', () => {
    const tiles = [tile('B1'), tile('B1'), tile('B13')];
    const { allTiles } = chooseOkey(tiles);

    const okeyTile = allTiles.find((tile) => tile.type === 'Okey');

    expect(okeyTile).toEqual(tile('B1O'));
  });

  it('should throw error if there is no indicator tile', () => {
    const tiles: Tile[] = [];
    expect(() => chooseOkey(tiles)).toThrow();
  });

  it('should throw error if there is indicator tile but no okey tile', () => {
    const tiles: Tile[] = [tile('B12')];
    expect(() => chooseOkey(tiles)).toThrow();
  });
});
