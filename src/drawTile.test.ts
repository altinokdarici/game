import { describe, it, expect } from '@jest/globals';

import type { Tile } from './types.js';

import { drawTile } from './drawTile.js';
import { tile } from './tile.js';

const playerInitialTiles: Readonly<Tile[]> = [tile('G1'), tile('B13'), tile('B12'), tile('B11')];

describe('drawTiles', () => {
  it('should draw tile and give remaining tile', () => {
    const thrownTiles: Tile[] = [tile('Y2')];
    const tileToDraw = thrownTiles[0];

    const { playerTiles, tiles } = drawTile(thrownTiles, playerInitialTiles);

    expect(playerTiles).toEqual([...playerInitialTiles, tileToDraw]);
    expect(tiles).toEqual([]);
  });

  it('should throw error if there is not enough tile', () => {
    const tiles: Tile[] = [];
    expect(() => drawTile(tiles, playerInitialTiles)).toThrow();
  });
});
