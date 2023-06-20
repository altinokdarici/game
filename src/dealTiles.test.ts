import { describe, it, expect } from '@jest/globals';
import { generateRandomTiles } from './generateRandomTiles.js';
import type { Tile } from './types.js';
import { dealTiles } from './dealTiles.js';

describe('dealTiles', () => {
  it('should deal tiles properly with extra tile', () => {
    const tiles = generateRandomTiles();

    const { playerHand, remainingTiles } = dealTiles(tiles, true);

    expect(playerHand.length).toBe(15);
    expect(remainingTiles.length).toBe(104 - playerHand.length);
  });

  it('should deal tiles properly without extra tile', () => {
    const tiles = generateRandomTiles();

    const { playerHand, remainingTiles } = dealTiles(tiles, false);

    expect(playerHand.length).toBe(14);
    expect(remainingTiles.length).toBe(104 - playerHand.length);
  });

  it('should throw error if there is not enough tile', () => {
    const tiles: Tile[] = [];
    expect(() => dealTiles(tiles, true)).toThrow();
  });
});
